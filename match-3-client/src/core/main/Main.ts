import { config } from '../../constants/config'
import { BoardAdapter } from '../../services/BoardAdapter'
import { Localtion } from '../../types/Localtion'
import { Match } from '../../types/Pair'
import { getRandomInt } from '../../utils/common'
import { AssetManager } from '../logic/AssetManager'
import { EffectManager } from '../logic/EffectManager'
import { Attribute, BaseCell } from '../models/BaseCell'
import { BombCell } from '../models/BombCell'
import { DestroyCell } from '../models/DestroyCell'
import { LaserColCell } from '../models/LaserColCell'
import { LaserRowCell } from '../models/LaserRowCell'
import { NormalCell } from '../models/NormalCell'
import { SpecialCell } from '../models/SpecialCell'
import { EffectPool } from '../pattern/pool/EffectPool'
import { ComboSkillManager } from '../pattern/strategies/managers/ComboSkillManager'
import { CellPosition } from './CellPosition'
import { CellType } from './CellType'
import { ComboType } from './ComboType'

export class Main {
  private cells: BaseCell[][]
  private rows: number
  private cols: number
  private cellSize: number
  private assetManger: AssetManager
  private effectManager: EffectManager
  private effectPools: Map<string, EffectPool>
  private ctx: CanvasRenderingContext2D
  private preKey: number | null = null
  private queue: CellPosition[][] = []
  private comboSkillManager: ComboSkillManager
  //private possibleColors" string[]=[]
  constructor(
    rows: number,
    cols: number,
    cells: BaseCell[][],
    cellSize: number,
    assetManager: AssetManager,
    effectManager: EffectManager,
    comboSkillManager: ComboSkillManager,

    ctx: CanvasRenderingContext2D
  ) {
    this.rows = rows
    this.cols = cols
    this.cellSize = cellSize
    this.assetManger = assetManager
    this.effectManager = effectManager
    this.comboSkillManager = comboSkillManager
    this.effectPools = this.initialPools()
    this.cells = cells
    this.ctx = ctx
    // this.draw()
  }
  public getCells() {
    return this.cells
  }
  async draw() {
    console.log('Draw >>>>> Board')
    const { ctx } = this
    ctx.clearRect(0, 0, this.cellSize, this.cellSize)
    const rows: number = this.rows
    const columns: number = this.cols
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const position = new CellPosition(i, j)
        this.drawCell(position)
      }
    }
  }
  /* Effect Click */
  click(primary: CellPosition, second: CellPosition | null) {
    const { row, col } = primary
    const cell = this.getCellAt(new CellPosition(row, col))
    cell.attribute.colorFill = config.COLOR.selected
    this.drawCell({ row, col })
    if (second != null && (second.col !== col || second.row !== row)) {
      const cell = this.getCellAt({ row: second.row, col: second.col })
      cell.attribute.colorFill = config.COLOR.default
      this.drawCell({ row: second.row, col: second.col })
    }
  }
  //Khởi tạo vẽ image
  private drawCell = (position: CellPosition, localtion?: Localtion) => {
    const { row, col } = position
    const { ctx } = this
    const cell = this.getCellAt(position)
    /* localtion sử dụng cho tọa độ vẽ animation */
    const x = localtion?.x ?? col * this.cellSize
    const y = localtion?.y ?? row * this.cellSize
    /* Xóa vùng */
    ctx.clearRect(x, y, this.cellSize, this.cellSize)
    /* Vẽ nền */
    ctx.fillStyle = cell.attribute.colorFill
    ctx.fillRect(x, y, this.cellSize, this.cellSize)
    /* Vẽ Image */
    const img = this.assetManger.getImageByTypeAndIndex(cell.type, cell.index)
    ctx.drawImage(img, x, y, this.cellSize, this.cellSize)
  }
  //kiểm tra vị trí hợp lệ
  public isValidPosition(firstPosCell: CellPosition, secondPosCell: CellPosition) {
    return (
      Math.abs(firstPosCell.row - secondPosCell.row) + Math.abs(firstPosCell.col - secondPosCell.col) === 1 &&
      this.isAdjacent(firstPosCell, secondPosCell)
    )
  }
  /* Kiểm tra vị trí cùng loại */
  private isAdjacent(firstPosCell: CellPosition, secondPosCell: CellPosition): boolean {
    const firstCell = this.getCellAt(firstPosCell)
    const secondCell = this.getCellAt(secondPosCell)
    return firstCell.index !== secondCell.index
  }

  private initialPools(): Map<string, EffectPool> {
    const pools: Map<string, EffectPool> = new Map()
    pools.set('swap', new EffectPool('swap', 2, this.effectManager))
    pools.set('explosion', new EffectPool('explosion', 2, this.effectManager))
    return pools
  }
  /* Method chính để gọi swap  */
  /* Phải refactor lại input play hoặc swapEffect */
  public async swapEffectManager(firstPick: CellPosition, secondPick: CellPosition) {
    const effectSwap = this.effectPools.get('swap')
    this.getCellAt(firstPick).attribute.colorFill = config.COLOR.default
    this.getCellAt(secondPick).attribute.colorFill = config.COLOR.default
    /* hàm this.drawCell phải dùng arrow function hoặc bind(this) để giữ context khi callback */
    await effectSwap?.play(firstPick, this.drawCell, secondPick)
    this.swapCells(firstPick, secondPick)
  }

  // Thêm item vào bảng
  private addCell(position: CellPosition, cell: BaseCell): boolean {
    const { row, col } = position
    if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
      if (cell instanceof SpecialCell) {
        cell.resetPosition({ row, col })
      }
      cell.resetAttribute()
      this.cells[row][col] = cell
      return true
    } else {
      return false
    }
  }
  //lấy cell tại vị trí
  public getCellAt(position: CellPosition): BaseCell {
    return this.cells[position.row][position.col]
  }
  //hoán đổi 2 cell
  private swapCells(firstPosCell: CellPosition, secondPosCell: CellPosition) {
    const tempCell = this.getCellAt(firstPosCell)
    const secondCell = this.getCellAt(secondPosCell)
    this.addCell(firstPosCell, secondCell)
    this.addCell(secondPosCell, tempCell)
  }

  /* Handle Remove Matches */

  public async handleMatchResolverCommand(
    boardAdapter: BoardAdapter,
    data: { firstCellPosition: CellPosition; secondCellPosition: CellPosition }
  ) {
    if (data != null) {
      const { firstCellPosition, secondCellPosition } = data
      const matches: Match[] = await boardAdapter.findMatchesByIndexCellAdapter(
        this.cells,
        firstCellPosition,
        secondCellPosition
      )
      if (matches.length > 0) {
        return this.matchResolverCommand(matches)
      } else {
        return null
      }
    } else {
      /* Scan khi load game */
      const matches: Match[] = await boardAdapter.findMatchesAdapter(this.cells)
      if (matches.length > 0) {
        return this.matchResolverCommand(matches)
      } else {
        return null
      }
    }
  }
  /* Xác định cell đặc biệt */
  private defineSpecialCell(cellMatches: CellPosition[]): CellType {
    const length = cellMatches.length
    if (length >= 5) return CellType.DESTROY
    if (length > 3 && length < 5) return CellType.LASER
    return CellType.NORMAL
  }
  private mapSpecialCell(position: CellPosition, cellType: CellType) {
    const cell = this.getCellAt(position)
    switch (cellType) {
      case CellType.BOMB:
        this.addCell(position, new BombCell(cell.index, position, cell.attribute))
        break
      case CellType.LASER_COL:
        this.addCell(position, new LaserColCell(cell.index, position, cell.attribute))
        break
      case CellType.LASER_ROW:
        this.addCell(position, new LaserRowCell(cell.index, position, cell.attribute))
        break
      case CellType.DESTROY:
        this.addCell(position, new DestroyCell(6, position, cell.attribute))
        break
      default:
        break
    }
    this.drawCell(position)
  }
  /* xử lý các ô là Special  */
  async matchResolverCommand(matches: Match[]) {
    let newArr: CellPosition[] = []
    const result: CellPosition[][] = []
    for (const position of matches) {
      // listMatches.forEach(element => {
      newArr = []
      if (position.matcheColumns.length > 0 && position.matcheRows.length > 0) {
        /* Giao giữa L T */
        const centerPos = new CellPosition(position.matcheRows[0].row, position.matcheColumns[0].col)
        this.mapSpecialCell(centerPos, CellType.BOMB)
        newArr = position.matcheRows.concat(position.matcheColumns).slice()
        // newArr = new Set(...new Set(newArr.filter(e => JSON.stringify(e))));
        newArr = newArr.filter((e) => {
          return this.cells[e.row][e.col].isNew != true
        })
      } else {
        if (position.matcheColumns.length > 0) {
          const cellType = this.defineSpecialCell(position.matcheColumns)
          if (cellType == CellType.LASER) {
            this.mapSpecialCell(position.matcheColumns[0], CellType.LASER_COL)
          } else {
            this.mapSpecialCell(position.matcheColumns[0], cellType)
          }
          newArr = position.matcheColumns.slice()
        } else if (position.matcheRows.length > 0) {
          const cellType = this.defineSpecialCell(position.matcheRows)
          if (cellType == CellType.LASER) {
            this.mapSpecialCell(position.matcheRows[0], CellType.LASER_COL)
          } else {
            this.mapSpecialCell(position.matcheRows[0], cellType)
          }
          newArr = position.matcheRows.slice()
        }
      }
      result.push(newArr)
      // promises.push(this.removeMatchedCells(newArr))
    }
    return result //type Pair[]
  }
  /* Clearing Command */
  handleRemoveMatchesCellCommand(pairs: CellPosition[][]) {
    if (pairs.length > 0) {
      return pairs.map((pair) => this.removeMatchedCellsCommand(pair))
    } else {
      return []
    }
  }

  async removeMatchedCellsCommand(pairs: CellPosition[]): Promise<CellPosition[]> {
    if (!pairs || pairs.length === 0) return []

    const removeDiamon: CellPosition[] = []
    const promises: Promise<void>[] = []

    // 1. Clear ô chính
    for (const pair of pairs) {
      const cell = this.cells[pair.row][pair.col]
      /* kiểm tra xem cell này có phải vừa tạo thành từ match không */
      if (!this.getCellAt({ row: pair.row, col: pair.col }).isNew) {
        // Nếu là skill, ghi lại match đặc biệt
        if (cell instanceof SpecialCell) {
          /* Effect Skill */
          /* gọi phương thức run trong specialSkill để thực hiện */
          const related = this.handleSpecialSkill(pair.row, pair.col) //Phương thức này là skill
          promises.push(
            ...related
              .filter(([r, c]) => pair.row !== r || pair.col !== c)
              .map(([r, c]) => this.removeCellWithEffect({ row: r, col: c }, removeDiamon))
          )
        }
        promises.push(this.resetCell(pair, removeDiamon))
      } else {
        this.getCellAt({ row: pair.row, col: pair.col }).isNew = false
        continue
      }
    }

    // 2. Refresh và return kết quả
    await Promise.all(promises)
    this.resetVisitedFlags()
    return removeDiamon
  }
  /* Remove Effect Manager */
  private removeCellWithEffect(pair: CellPosition, removeDiamon: CellPosition[]): Promise<void> {
    const { row, col } = pair
    const cell = this.cells[row][col]

    // Nếu là skill → đưa vào queue xử lý riêng
    if (cell instanceof SpecialCell) {
      if (cell.type !== CellType.DESTROY) {
        this.preKey = cell.index
      }
      this.queue.push([pair])
      return Promise.resolve() // Không xoá liền
    }
    return this.resetCell(pair, removeDiamon)
  }
  /* Reset Cell */
  private resetCell(pair: CellPosition, removeDiamon: CellPosition[]): Promise<void> {
    const { row, col } = pair
    // Reset trạng thái cell
    const cell = new NormalCell(0, new Attribute(config.COLOR.default, config.COLOR.border))
    const fade = this.effectManager.fadeAndShrinkEffect(col, row, 40, 400)
    this.addCell(pair, cell)
    this.clearCellByIndex(col, row, cell)
    removeDiamon.push(pair)
    return fade
  }
  private clearCellByIndex(row: number, col: number, cell: BaseCell) {
    if (cell instanceof SpecialCell) {
      cell.attribute.colorFill = config.COLOR.default
      this.drawCell({ row, col })
    }
  }
  /* handle Skill */
  private handleSpecialSkill(row: number, col: number): number[][] {
    /* Cải tiến là sẽ gọi phương thức run trong mỗi specialKill */
    let matches: number[][] = []
    switch (this.cells[row][col].type) {
      case CellType.LASER_COL: {
        console.log('Power LASER_COL.')
        this.getNumbers(10).map((e) => matches.push([e, col]))
        break
      }
      case CellType.LASER_ROW: {
        console.log('Power LASER_ROW.')
        this.getNumbers(18).map((e) => matches.push([row, e]))
        break
      }
      case CellType.BOMB: {
        matches.push(...this.getNumbersAroundCell(row, col))
        break
      }
      case CellType.DESTROY: {
        matches = this.#clearByKey()
        break
      }
    }
    if (matches.length) {
      return matches
    } else {
      return []
    }
  }

  /* Falling Command  */
  dropColl(rows: number, col: number): number {
    let emptyRow = rows - 1
    // Duyệt từ dưới lên
    for (let row = rows - 1; row >= 0; row--) {
      if (this.cells[row][col].index !== 0 || this.cells[row][col].type === CellType.DESTROY) {
        // Di chuyển khối xuống vị trí trống gần nhất
        if (emptyRow !== row) {
          const index = this.queue.findIndex((element) => {
            return JSON.stringify(element) === JSON.stringify([{ row: row, col: col }]) //kiểm tra xem vị trí này có trong queue chưa. nếu có rồi thì cập nhật lại vị trí trong queue
          })
          if (index >= 0) {
            this.queue[index] = [{ row: emptyRow, col: col }]
          }
          this._swapCells([
            [emptyRow, col],
            [row, col]
          ])
        }
        emptyRow--
      }
    }
    return emptyRow
  }
  private _swapCells(pairPick: number[][]) {
    const [first, second] = pairPick
    const [row1, col1] = first
    const [row2, col2] = second
    this.swapCells({ row: row1, col: col1 }, { row: row2, col: col2 })
    this.drawCell({ row: row1, col: col1 })
    this.drawCell({ row: row2, col: col2 })
  }
  /* Filling Command */
  fillingBoardCommand(emptyRow: number, col: number) {
    while (emptyRow >= 0) {
      const cell = new NormalCell(
        getRandomInt(this.assetManger.length()),
        new Attribute(config.COLOR.default, config.COLOR.border)
      )
      // this.cells[emptyRow][col].index = getRandomInt(this.assetManger.length() - 1) // Tạo khối mới (1-5)
      this.addCell({ row: emptyRow, col: col }, cell)
      this.drawCell({ row: emptyRow, col: col })
      emptyRow--
    }
  }
  /* Combo Command */

  /* Check Special Combo */
  public isCombo(first: CellPosition, second: CellPosition): boolean {
    const firstCell = this.getCellAt(first)
    const secondCell = this.getCellAt(second)
    if (firstCell instanceof SpecialCell && secondCell instanceof SpecialCell) {
      return true
    }
    return false
  }
  public handleComboSkillCommand(first: CellPosition, second: CellPosition): CellPosition[][] {
    const firstCell = this.getCellAt(first)
    const secondCell = this.getCellAt(second)
    if (firstCell instanceof SpecialCell && secondCell instanceof SpecialCell) {
      const matches = this.comboSkillManager.handleCombo(firstCell, secondCell, this.handleComboSkill)
      this.addCell(first, firstCell.resetNormalCell())
      this.addCell(second, secondCell.resetNormalCell())
      return matches
    }
    return []
  }
  /* Handle Combo Skill */
  handleComboSkill = (first: SpecialCell, second: SpecialCell, comboType: ComboType): CellPosition[][] => {
    let result: CellPosition[][] = []
    switch (comboType) {
      case ComboType.BOMB_BOMB:
        console.log('BOMB_BOMB >>> Combo')
        result = this.doubleBomb(first, second)
        break
      case ComboType.LASER_LASER:
        console.log('LASER_LASER >>> Combo')
        result = this.doubleLaser(first, second)
        break
      case ComboType.DESTROY_DESTROY:
        console.log('DESTROY_DESTROY >>> Combo')
        break
      case ComboType.DESTROY_BOMB:
        console.log('DESTROY_BOMB >>> Combo')
        break
      case ComboType.DESTROY_LASER:
        console.log('DESTROY_LASER >>> Combo')
        break
      case ComboType.LASER_BOMB:
        console.log('LASER_BOMB >>> Combo')
        if (first.type !== CellType.BOMB) {
          result = this.laserWithBomb(first, second)
        } else {
          result = this.laserWithBomb(second, first)
        }
        break
      default:
        break
    }
    console.log('Resolve() >>> Combo')
    return result
  }

  /* Combo Skill */

  /* Double Bomb */
  doubleBomb(first: SpecialCell, second: SpecialCell): CellPosition[][] {
    const { row, col } = first.getPosition()
    const indexs: CellPosition[][] = []
    const dx = [-1, 0, 1, 1, 1, 0, -1, -1, -2, 0, 2, 2, 2, 0, -2, -2]
    const dy = [-1, -1, -1, 0, 1, 1, 1, 0, -2, -2, -2, 0, 2, 2, 2, 0]
    for (let k = 0; k < dx.length; k++) {
      const i1 = row + dx[k]
      const j1 = col + dy[k]
      if (i1 >= 0 && i1 < 10 && j1 >= 0 && j1 < 18) {
        indexs.push([{ row: i1, col: j1 }])
      }
    }
    // indexs.push([second.getPosition()])
    // this.addCell(second.getPosition(), new NormalCell(second.index, second.attribute))
    return indexs
  }

  /* Double Laser */
  doubleLaser(first: SpecialCell, second: SpecialCell): CellPosition[][] {
    const { row, col } = first.getPosition()
    const matches: CellPosition[][] = []
    this.getNumbers(18).map((e) => matches.push([{ row: row, col: e }])) /* xóa một dòng */
    this.getNumbers(10).map((e) => matches.push([{ row: e, col: col }])) /* xóa một cột */
    // matches.push([second.getPosition()])
    // this.addCell(second.getPosition(), new NormalCell(second.index, second.attribute))
    return matches
  }
  /* Laser with Bomb */
  laserWithBomb(first: SpecialCell, second: SpecialCell): CellPosition[][] {
    const { row, col } = first.getPosition()
    const matches: CellPosition[][] = []
    // this.getNumbersAroundCell(row, col)
    if (first instanceof LaserColCell) {
      const indexCols = this.getNumbers(10)
      indexCols.map((e) => matches.push([{ row: e, col: col - 1 }]))
      indexCols.map((e) => matches.push([{ row: e, col: col }]))
      indexCols.map((e) => matches.push([{ row: e, col: col + 1 }]))
    } else if (first instanceof LaserRowCell) {
      const indexRows = this.getNumbers(18) /* xóa một dòng */
      indexRows.map((e) => matches.push([{ row: row - 1, col: e }]))
      indexRows.map((e) => matches.push([{ row: row, col: e }]))
      indexRows.map((e) => matches.push([{ row: row + 1, col: e }]))
    }
    // matches.push([second.getPosition()])
    // this.addCell(second.getPosition(), new NormalCell(second.index, second.attribute))
    return matches
  }
  /* >>>>>>>>>>>>>>>> END <<<<<<<<<<<<<<<<<<<<<<<< */
  /* Reset Flag isVisited */
  private resetVisitedFlags() {
    this.cells.forEach((row) => {
      return row.forEach((cell) => {
        if (cell.isVisited) cell.isVisited = false
        if (cell.isNew) cell.isNew = false
      })
    })
  }
  /* Common Method handle Skill */
  /* Index theo rowm, column */
  private getNumbers(num: number): number[] {
    return Array.from({ length: num }, (_, i) => i)
  }
  /* index trong phạm vi */
  private getNumbersAroundCell(i: number, j: number): number[][] {
    const indexs: number[][] = []
    const dx = [-1, 0, 1, 1, 1, 0, -1, -1]
    const dy = [-1, -1, -1, 0, 1, 1, 1, 0]
    for (let k = 0; k < dx.length; k++) {
      const i1 = i + dx[k]
      const j1 = j + dy[k]
      if (i1 >= 0 && i1 < 10 && j1 >= 0 && j1 < 18) {
        indexs.push([i1, j1])
      }
    }
    return indexs
  }
  #clearByKey() {
    const matches: number[][] = []
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 18; j++) {
        if (this.cells[i][j].index == this.preKey)
          //thay 3 thành index
          matches.push([i, j])
      }
    }
    return matches
  }
  //phương thức hỗ trợ skill
  explodeArea(position: CellPosition, radius: number): void {
    console.log(`Xóa cell trong bán kính ${radius} từ (${position.row},${position.col})`)
    //xử lý xóa
  }
  //Phương thức xóa hàng ngang, và hàng dọc
  clearColumn(position: CellPosition): void {
    console.log(`Xóa cột ${position.col}`)
    //xử lý xóa
  }
  clearRow(position: CellPosition): void {
    console.log(`Xóa hàng ${position.row} `)
    //xử lý xóa
  }
  //Phương thức xóa Cell cùng loại
  clearAllCellsOfDestroyType(position: CellPosition, srcCell: BaseCell): void {
    console.log(`Xóa tất cả item ${srcCell.index} cùng màu với item tại (${position.row}, ${position.col})`)
    // Logic xóa item cùng loại
  }
  getQueue() {
    return this.queue
  }
  setQueue(newValue: CellPosition[][]) {
    this.queue = newValue
  }
}
