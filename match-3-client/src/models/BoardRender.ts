import { resolve } from 'path'
import { MatchApi } from '../api/models/MatchApi'
import { config } from '../constants/config'
import { imageUIType } from '../constants/ItemUI'
import { EffectManager } from '../core/logic/EffectManager'
import { TYPECELL } from '../enums/TypeCell'
import { Match, Pair } from '../types/Pair'
import { getRandomInt } from '../utils/common'
import { Board } from './Board'
import { Cell } from './Cell'
import { convert } from './ConvertToMatchType'
import Shape from './Shape'

export class BoardRenderer {
  board: Board
  ctx: CanvasRenderingContext2D
  queue: Pair[][]
  imgMgr: Shape
  cellSize: number = config.ATTRIBUTE.boxSize
  preKey: number | undefined
  effectManager: EffectManager
  constructor(board: Board, ctx: CanvasRenderingContext2D) {
    this.board = board
    this.ctx = ctx
    this.queue = []
    this.imgMgr = new Shape(imageUIType)
    this.effectManager = new EffectManager(ctx)
  }
  async handleFallingCellsCommand(promises: Promise<Pair[]>[]) {
    await Promise.all(promises).then(async (data) => {
      data.forEach((item) => {
        const sortArr = [
          ...new Set(
            item
              .flatMap((e) => e.column)
              .sort((a, b) => a - b)
              .flat()
          )
        ]
        this.dropdownTiles(10, sortArr)
      })
    })
  }
  dropColl(rows: number, col: number): number {
    let emptyRow = rows - 1
    // Duyệt từ dưới lên
    for (let row = rows - 1; row >= 0; row--) {
      if (this.board.cells[row][col].index !== 0) {
        // Di chuyển khối xuống vị trí trống gần nhất
        if (emptyRow !== row) {
          const index = this.queue.findIndex((element) => {
            return JSON.stringify(element) === JSON.stringify([{ row: row, column: col }]) //kiểm tra xem vị trí này có trong queue chưa. nếu có rồi thì cập nhật lại vị trí trong queue
          })
          if (index >= 0) {
            this.queue[index] = [{ row: emptyRow, column: col }]
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
  fillingBoardCommand(emptyRow: number, col: number) {
    while (emptyRow >= 0) {
      this.board.cells[emptyRow][col].index = Math.floor(Math.random() * 5) + 1 // Tạo khối mới (1-5)
      this.fillCell({ row: emptyRow, column: col }, this.board.cells[emptyRow][col])
      emptyRow--
    }
  }

  handleRemoveMatchesCellCommand(pairs: Pair[][]) {
    if (pairs.length > 0) {
      return pairs.map((pair) => this.removeMatchedCellsCommand(pair))
    } else {
      return []
    }
  }

  async removeMatchedCellsCommand(pairs: Pair[]): Promise<Pair[]> {
    if (!pairs || pairs.length === 0) return []

    const removeDiamon: Pair[] = []
    const promises: Promise<void>[] = []

    // 1. Clear ô chính
    for (const pair of pairs) {
      const cell = this.board.cells[pair.row][pair.column]
      if (!this.board.cells[pair.row][pair.column].isNew) {
        // Nếu là skill, ghi lại match đặc biệt
        if (cell.type !== TYPECELL.NORMAL) {
          const related = this.#handleSpecialSkill(pair.row, pair.column)
          promises.push(
            ...related
              .filter(([r, c]) => pair.row !== r || pair.column !== c)
              .map(([r, c]) => this.#removeCellWithEffect({ row: r, column: c }, removeDiamon))
          )
        }
        promises.push(this.#resetCell(pair, removeDiamon))
      } else {
        this.board.cells[pair.row][pair.column].isNew = false
        continue
      }
    }

    // 2. Refresh và return kết quả
    await Promise.all(promises)
    this.#resetVisitedFlags()
    return removeDiamon
  }
  async matchResolverCommand(matches: Match[]) {
    const mapSkill: TYPECELL[][][] = [
      [[TYPECELL.BOOM], [TYPECELL.BOOM], [TYPECELL.DESTROY]],
      [[TYPECELL.BOOM], [TYPECELL.HORIZONTAL, TYPECELL.VERTICAL], [TYPECELL.HORIZONTAL, TYPECELL.DESTROY]],
      [[TYPECELL.DESTROY], [TYPECELL.DESTROY, TYPECELL.VERTICAL], [TYPECELL.DESTROY, TYPECELL.DESTROY]]
    ]
    let newArr: Pair[] = []
    const result: Pair[][] = []
    for (const pair of matches) {
      // listMatches.forEach(element => {
      newArr = []
      if (pair.pairColumns.length > 0 && pair.pairRows.length > 0) {
        const mapIndex = mapSkill[this.numberOfMatches(pair.pairRows)][this.numberOfMatches(pair.pairColumns)]
        this.mapSpecialShapes(pair.pairRows, mapIndex[0])
        if (mapIndex.length >= 2) {
          this.mapSpecialShapes(pair.pairColumns, mapIndex[1])
        }
        newArr = pair.pairRows.concat(pair.pairColumns).slice()
        // newArr = new Set(...new Set(newArr.filter(e => JSON.stringify(e))));
        newArr = newArr.filter((e) => {
          return this.board.cells[e.row][e.column].isNew != true
        })
      } else {
        let mapIndex
        if (pair.pairColumns.length > 0) {
          mapIndex = this.defineNumberOfMatches(pair.pairColumns, TYPECELL.VERTICAL)
          this.mapSpecialShapes(pair.pairColumns, mapIndex)
          newArr = pair.pairColumns.slice()
        } else if (pair.pairRows.length > 0) {
          mapIndex = this.defineNumberOfMatches(pair.pairRows, TYPECELL.HORIZONTAL)
          this.mapSpecialShapes(pair.pairRows, mapIndex)
          newArr = pair.pairRows.slice()
        }
      }
      result.push(newArr)
      // promises.push(this.removeMatchedCells(newArr))
    }
    return result //type Pair[]
  }

  /* 
    arrPair[] vị trí ban đầu ô sẽ drop
    Sau Drop có thể sẽ va chạm với các ô kỹ năng, và tạo ra thêm các ô sẽ drop mới
  */
  // async removeEffectCommand(arrPair: Pair[], promises: Promise<Pair[]>[]) {
  //   Promise.all(promises).then(async (data) => {
  //     data.forEach((item) => {
  //       arrPair = arrPair.concat(item)
  //     })
  //     await new Promise((resolve) => setTimeout(resolve, 300))
  //     const sortArr = [
  //       ...new Set(
  //         arrPair
  //           .flatMap((e) => e.column)
  //           .sort((a, b) => a - b)
  //           .flat()
  //       )
  //     ]
  //     this.dropdownTiles(10, sortArr)
  //     await new Promise((resolve) => setTimeout(resolve, 500))
  //   })
  // }

  swapEffectManager(firstPick: Pair, secondPick: Pair) {
    return new Promise<void>((resolve) => {
      this.effectManager.swapEffect(
        firstPick,
        secondPick,
        this.cellSize,
        200,
        (row, col, x, y) => this.drawAnimation(row, col, x, y),
        () => resolve()
      )
    })
  }

  drawAnimation(row: number, col: number, x: number, y: number) {
    const { ctx } = this
    ctx.fillStyle = config.COLOR.default
    ctx.fillRect(x, y, this.cellSize, this.cellSize)
    ctx.lineWidth = 3
    ctx.globalAlpha = 1.0
    ctx.strokeStyle = config.COLOR.border
    const cell = this.board.cells[row][col]
    ctx.strokeRect(x, y, this.cellSize, this.cellSize)
    const img = this.imgMgr.get(cell.type, cell.index)
    ctx.drawImage(img, x, y, this.cellSize, this.cellSize)
  }
  /* Refactor ========================= */
  async loadAll() {
    await this.imgMgr.loadAll()
    await this.draw()
    console.log('>>>>> draw')
  }
  click(primary: Pair, second: Pair | null) {
    const { row, column } = primary
    const { board } = this
    const cell = board.getCell(row, column)
    cell.attribute.colorFill = config.COLOR.selected
    this.fillCell({ row, column }, cell)
    if (second != null && (second.column !== column || second.row !== row)) {
      const cell = board.getCell(second.row, second.column)
      // if(second.column == column && second.row === row){

      // }
      cell.attribute.colorFill = config.COLOR.default
      this.fillCell({ row: second.row, column: second.column }, cell)
    }
    // this.drawImage(row, col, cell);
  }
  async draw() {
    const { ctx, board } = this
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const rows: number = board.rows
    const columns: number = board.columns
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell = board.getCell(i, j)
        this.fillCell({ row: i, column: j }, cell)
        // this.drawImage(i, j, cell);
      }
    }
  }
  fillCell(pair: Pair, cell: Cell) {
    this.drawCell(pair, cell)
    this.drawImage(pair, cell)
  }
  drawCell(pair: Pair, cell: Cell) {
    const { row, column } = pair
    const { ctx } = this
    ctx.clearRect(column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
    ctx.fillStyle = cell.attribute.colorFill
    ctx.fillRect(column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
    ctx.lineWidth = 3
    ctx.globalAlpha = 1.0
    ctx.strokeStyle = config.COLOR.border
    ctx.strokeRect(column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
  }
  drawImage(pair: Pair, cell: Cell) {
    const { row, column } = pair
    const { ctx, imgMgr } = this
    const img = imgMgr.get(cell.type, cell.index)

    ctx.drawImage(img, column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
  }
  ////////////////////////
  _getSwapAxisInfo(pairPick: number[][]) {
    const [first, second] = pairPick //cặp giá trị 2 ô chọn swap [[2,3],[2,4]]
    if (first[0] === second[0]) {
      //kiểm tra nếu row của ô 1 = row của ô 2 thì nó là hàng ngang
      return {
        axis: 'HORIZONTAL',
        numberAxis: first[0], //trục bắt đầu swap
        a: Math.min(first[1], second[1]), //min
        b: Math.max(first[1], second[1]) // max
        //max và min sẽ là điểm bắt đầu và điểm kết thúc để swap với effect
      }
    } else {
      return {
        axis: 'VERTICAL',
        numberAxis: first[1],
        a: Math.min(first[0], second[0]),
        b: Math.max(first[0], second[0])
      }
    }
  }

  /* Test */
  swapEffectCommand(primary: Pair | null, second: Pair) {
    if (primary != null) {
      const matches: number[][] = [
        [primary.row, primary.column],
        [second.row, second.column]
      ]
      this.swapEffect(matches).then(() => {
        return
      })
    }
  }
  /* =================== */
  handlePick(firstPick: Pair, pick: Pair) {
    if (this.isAdjacent(firstPick, pick)) {
      //Kiểm tra có phải 2 ô hợp lệ không
      const matches: number[][] = [
        [firstPick.row, firstPick.column],
        [pick.row, pick.column]
      ]
      this.swapEffect(matches).then(async () => {
        const data = await this.board.findMatchAt()
        const matchesApi: MatchApi[] = data.map((e) => Object.setPrototypeOf(e, MatchApi.prototype))
        // const matchesApi: MatchApi[] = Object.setPrototypeOf(await boardRender.board.findMatchAt(), MatchApi.prototype)
        console.log('match: ', matchesApi)
        if (matchesApi.length) {
          this.matchResolver(convert(matchesApi))
        } else {
          this.swapEffect(matches).then(() => {
            return 'NOT_MATCH'
          })
        }
      })
    } else {
      this?.click(pick, firstPick)
      return 'SECONDPICK'
    }
  }
  /* ======================== */
  isAdjacent(primary: Pair, second: Pair) {
    const { board } = this
    return (
      // board.cells[primary.row][primary.column].type !== board.cells[second.row][second.column].type &&
      board.cells[primary.row][primary.column].index !== board.cells[second.row][second.column].index
    )
  }
  /* ===================== */
  _swapCells(pairPick: number[][]) {
    const [first, second] = pairPick
    const [row1, col1] = first
    const [row2, col2] = second
    const temp: Cell = this.board.cells[row1][col1]
    this.board.cells[row1][col1] = this.board.cells[row2][col2]
    this.board.cells[row2][col2] = temp
    this.fillCell({ row: row1, column: col1 }, this.board.cells[row1][col1])
    this.fillCell({ row: row2, column: col2 }, this.board.cells[row2][col2])
  }
  _drawCellAndImage(pair: Pair, cell: Cell) {
    this.fillCell(pair, cell)
  }
  _swapCellsAndRedraw(axis: string, numberAxis: number, a: number, b: number) {
    //numberAxis là trục chính, đại diện cho cột nếu Vertical, và dòng nếu horizontal
    if (axis === 'HORIZONTAL') {
      console.log(axis)
      this._swapCells([
        [numberAxis, a],
        [numberAxis, b]
      ])
      this._drawCellAndImage({ row: numberAxis, column: a }, this.board.cells[numberAxis][a])
      this._drawCellAndImage({ row: numberAxis, column: b }, this.board.cells[numberAxis][b])
    } else {
      console.log(axis)
      this._swapCells([
        [a, numberAxis],
        [b, numberAxis]
      ])
      this._drawCellAndImage({ row: a, column: numberAxis }, this.board.cells[a][numberAxis])
      this._drawCellAndImage({ row: b, column: numberAxis }, this.board.cells[b][numberAxis])
    }
  }

  /* ================== */

  swapEffect = (pairPick: number[][]) => {
    return new Promise<void>((resolve) => {
      if (!pairPick || pairPick.length < 2) return resolve()
      const { a, b, axis, numberAxis } = this._getSwapAxisInfo(pairPick)
      const speed: number = 0.09 //tốc độ
      let k = a,
        l = b
      // k và l sẽ là điểm tạm thời để nó bắt đầu tiến dần về giá trị còn lại

      const draw = () => {
        const isAnimated = k < b || l > a //kiểm tra nếu k chưa tiến về b (max) hoặc l chưa tiến về a (min)
        if (!isAnimated) {
          //nếu true tạo chuyển động swap
          this._swapCellsAndRedraw(axis, numberAxis, a, b)
          resolve()
          return
        }
        //tốc độ vẽ và xóa để tạo ra hiệu ứng chuyển động
        k += speed
        l -= speed
        this._drawSwapFrame(k, l, a, b, axis, numberAxis)
        requestAnimationFrame(draw)
      }

      draw()
    })
  }
  _getSwapImage = (x: number, y: number, entry: number, axis: string) => {
    /* 
            x, y: trục hiện tại khi đang chuyển động swap
            entry: vị vị trí ban đầu
        */
    const row = axis === 'HORIZONTAL' ? Math.floor(x) : Math.floor(entry)
    const col = axis === 'HORIZONTAL' ? Math.floor(entry) : Math.floor(y)
    const cell = this.board.cells[row][col]
    return this.imgMgr.get(cell.type, cell.index)
  }
  _drawSwapFrame(k: number, l: number, a: number, b: number, axis: string, numberAxis: number) {
    /*
     *   k, l: tọa độ mới
     *   a,b (min,max) : tọa độ ban đầu
     *   axis: trục
     *   numberAxis: vị trí tại trục tương ứng
     */
    if (axis === 'HORIZONTAL') {
      this.clearStyleCell({ row: numberAxis, column: a })
      this.clearStyleCell({ row: numberAxis, column: b })
      const srcImgPrimary = this._getSwapImage(numberAxis, k, a, axis)
      const srcImgSecond = this._getSwapImage(numberAxis, l, b, axis)
      this.ctx.drawImage(srcImgPrimary, k * this.cellSize, numberAxis * this.cellSize, this.cellSize, this.cellSize)
      this.ctx.drawImage(srcImgSecond, l * this.cellSize, numberAxis * this.cellSize, this.cellSize, this.cellSize)
    } else {
      this.clearStyleCell({ row: a, column: numberAxis })
      this.clearStyleCell({ row: b, column: numberAxis })
      const srcImgPrimary = this._getSwapImage(k, numberAxis, a, axis)
      const srcImgSecond = this._getSwapImage(l, numberAxis, b, axis)
      this.ctx.drawImage(srcImgPrimary, numberAxis * this.cellSize, k * this.cellSize, this.cellSize, this.cellSize)
      this.ctx.drawImage(srcImgSecond, numberAxis * this.cellSize, l * this.cellSize, this.cellSize, this.cellSize)
    }
  }
  clearStyleCell(pair: Pair) {
    const { row, column } = pair
    this.board.cells[row][column].attribute.colorFill = config.COLOR.default
    this.ctx.clearRect(column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
  }

  /* =========== */
  #clearCellByIndex(row: number, col: number, cell: Cell) {
    if (cell.type !== TYPECELL.NORMAL) {
      cell.attribute.colorFill = config.COLOR.default
      this.fillCell({ row: row, column: col }, cell)
    }
  }
  mapSpecialShapes(matches: Pair[], typeCell: TYPECELL) {
    const row = matches[0].row
    const col = matches[0].column
    if (typeCell !== TYPECELL.NORMAL) {
      if (typeCell === TYPECELL.DESTROY) {
        this.board.cells[row][col].index = 0
      }
      this.board.cells[row][col].isNew = true
      this.board.cells[row][col].type = typeCell
    }

    this.board.cells[row][col].attribute.colorBorder = config.COLOR.border
    this.#clearCellByIndex(row, col, this.board.cells[row][col])
  }
  numberOfMatches(matches: Pair[]) {
    const length = matches.length
    return length >= 5 ? 2 : length > 3 && length < 5 ? 1 : length > 2 && length < 4 ? 0 : -1
  }
  defineNumberOfMatches(matches: Pair[], typeCell: TYPECELL) {
    const length = matches.length
    return length >= 5 ? TYPECELL.DESTROY : length > 3 && length < 5 ? typeCell : TYPECELL.NORMAL
  }
  /* Match Resolve */

  async matchResolver(matches: Match[]) {
    const mapSkill: TYPECELL[][][] = [
      [[TYPECELL.BOOM], [TYPECELL.BOOM], [TYPECELL.DESTROY]],
      [[TYPECELL.BOOM], [TYPECELL.HORIZONTAL, TYPECELL.VERTICAL], [TYPECELL.HORIZONTAL, TYPECELL.DESTROY]],
      [[TYPECELL.DESTROY], [TYPECELL.DESTROY, TYPECELL.VERTICAL], [TYPECELL.DESTROY, TYPECELL.DESTROY]]
    ]
    let newArr: Pair[] = []
    const promises = []
    for (const pair of matches) {
      // listMatches.forEach(element => {
      newArr = []
      if (pair.pairColumns.length > 0 && pair.pairRows.length > 0) {
        const mapIndex = mapSkill[this.numberOfMatches(pair.pairRows)][this.numberOfMatches(pair.pairColumns)]
        this.mapSpecialShapes(pair.pairRows, mapIndex[0])
        if (mapIndex.length >= 2) {
          this.mapSpecialShapes(pair.pairColumns, mapIndex[1])
        }
        newArr = pair.pairRows.concat(pair.pairColumns).slice()
        // newArr = new Set(...new Set(newArr.filter(e => JSON.stringify(e))));
        newArr = newArr.filter((e) => {
          return this.board.cells[e.row][e.column].isNew != true
        })
      } else {
        let mapIndex
        if (pair.pairColumns.length > 0) {
          mapIndex = this.defineNumberOfMatches(pair.pairColumns, TYPECELL.VERTICAL)
          this.mapSpecialShapes(pair.pairColumns, mapIndex)
          newArr = pair.pairColumns.slice()
        } else if (pair.pairRows.length > 0) {
          mapIndex = this.defineNumberOfMatches(pair.pairRows, TYPECELL.HORIZONTAL)
          this.mapSpecialShapes(pair.pairRows, mapIndex)
          newArr = pair.pairRows.slice()
        }
      }

      promises.push(this.removeMatchedCells(newArr))
    }
    await Promise.all(promises).then(async (data) => {
      data.forEach((item) => {
        newArr = newArr.concat(item)
      })
      await new Promise((resolve) => setTimeout(resolve, 300))
      const sortArr = [
        ...new Set(
          newArr
            .flatMap((e) => e.column)
            .sort((a, b) => a - b)
            .flat()
        )
      ]
      this.dropdownTiles(10, sortArr)
      await new Promise((resolve) => setTimeout(resolve, 500))
    })
    let newData = []
    while (this.queue.length > 0) {
      newData = await this.removeMatchedCells(this.queue.shift() as Pair[])
      // await new Promise((resolve) => setTimeout(resolve, 300))
      const sortArr = [
        ...new Set(
          newData
            .flatMap((e) => e.column)
            .sort((a, b) => a - b)
            .flat()
        )
      ]
      this.dropdownTiles(10, sortArr)
      // await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }
  dropdownTiles(rows: number, arrColumn: number[]) {
    // Tạo bản sao để không thay đổi grid gốc

    for (let i = 0; i < arrColumn.length; i++) {
      const col = arrColumn[i]
      let emptyRow = rows - 1

      // Duyệt từ dưới lên
      for (let row = rows - 1; row >= 0; row--) {
        if (this.board.cells[row][col].index !== 0) {
          // Di chuyển khối xuống vị trí trống gần nhất
          if (emptyRow !== row) {
            const index = this.queue.findIndex((element) => {
              return JSON.stringify(element) === JSON.stringify([{ row: row, column: col }]) //kiểm tra xem vị trí này có trong queue chưa. nếu có rồi thì cập nhật lại vị trí trong queue
            })
            if (index >= 0) {
              this.queue[index] = [{ row: emptyRow, column: col }]
            }
            this._swapCells([
              [emptyRow, col],
              [row, col]
            ])
          }
          emptyRow--
        }
      }

      // Điền các ô trống còn lại ở trên bằng các khối mới
      while (emptyRow >= 0) {
        this.board.cells[emptyRow][col].index = Math.floor(Math.random() * 5) + 1 // Tạo khối mới (1-5)
        this.fillCell({ row: emptyRow, column: col }, this.board.cells[emptyRow][col])
        emptyRow--
      }
    }
  }
  /* Move Down */
  moveDown(col: number, len: number) {
    new Promise<void>((resolve) => {
      while (len >= 0) {
        if (this.board.cells[len][col].index != 0 || this.board.cells[len][col].type === TYPECELL.DESTROY) {
          len--
          continue
        } else {
          for (let k = len; k >= 0; k--) {
            if (k == 0) {
              const num = getRandomInt(this.imgMgr.length() - 1)
              this.board.cells[k][col].index = num
              this.fillCell({ row: k, column: col }, this.board.cells[k][col])
            } else {
              const pre = { row: k, col: col }
              const pos = { row: k - 1, col: col }
              const index = this.queue.findIndex((element) => {
                console.log(JSON.stringify(element))
                return JSON.stringify(element) === JSON.stringify([{ row: pos.row, column: pos.col }]) //kiểm tra xem vị trí này có trong queue chưa. nếu có rồi thì cập nhật lại vị trí trong queue
              })
              if (index >= 0) {
                this.queue[index] = [{ row: pre.row, column: pre.col }]
              }
              this._swapCells([
                [pre.row, pre.col],
                [pos.row, pos.col]
              ])
            }
          }
          len = 10 - 1
        }
        // isLoop = true;
        this.#resetVisitedFlags()
        resolve()
      }
    })
  }
  /* Effect remove */

  fadeAndShrinkEffect(col: number, row: number, fadeSpeed: number, shrinkRate: number, originalSize: number) {
    return new Promise<void>((resolve) => {
      let fadeOpacity = 1.0
      let currentSize = originalSize
      const shrinkInterval = setInterval(() => {
        fadeOpacity -= fadeSpeed
        this.ctx.clearRect(col * originalSize, row * originalSize, originalSize, originalSize)
        const x = col * originalSize + (originalSize - currentSize) / 2
        const y = row * originalSize + (originalSize - currentSize) / 2
        this.ctx.globalAlpha = fadeOpacity
        this.ctx.fillRect(x, y, currentSize, currentSize)
        currentSize -= shrinkRate
        if (currentSize <= 0) {
          currentSize = 0
          clearInterval(shrinkInterval)
          resolve()
        }
      }, 50)
    })
  }
  /* remove Effect  */
  async removeDiamon(pairs: Pair[]): Promise<Pair[]> {
    if (pairs == null) {
      return []
    }
    const temp = pairs.slice()
    const promises = []
    let listMatches: number[][] = []
    for (let i = 0; i < temp.length; i++) {
      const row = temp[i].row
      const col = temp[i].column
      if (!this.board.cells[row][col].isNew) {
        if (this.board.cells[row][col].type != TYPECELL.NORMAL) {
          listMatches = listMatches.concat(this.#handleSpecialSkill(row, col))
        }
        const fadePromise = this.effectManager.fadeAndShrinkEffect(col, row, 40, 400)
        this.board.cells[row][col].index = 0
        this.board.cells[row][col].type = TYPECELL.NORMAL
        this.board.cells[row][col].attribute.colorFill = config.COLOR.default
        this.board.cells[row][col].isQueue = false
        this.#clearCellByIndex(col, row, this.board.cells[row][col])

        promises.push(fadePromise)
      } else {
        this.board.cells[row][col].isNew = false
      }
    }
    if (listMatches.length) {
      for (let i = 0; i < listMatches.length; i++) {
        const row = listMatches[i][0]
        const col = listMatches[i][1]
        if (!this.board.cells[row][col].isNew) {
          if (this.board.cells[row][col].type != TYPECELL.NORMAL) {
            if (this.board.cells[row][col].type != TYPECELL.DESTROY) {
              this.preKey = this.board.cells[row][col].index
            }
            this.queue.push([{ row: row, column: col }])
            continue
          }
          const fadePromise = this.effectManager.fadeAndShrinkEffect(col, row, 40, 400)
          this.board.cells[row][col].index = 0
          this.board.cells[row][col].type = TYPECELL.NORMAL
          this.board.cells[row][col].attribute.colorFill = config.COLOR.default
          this.board.cells[row][col].isQueue = false
          this.#clearCellByIndex(col, row, this.board.cells[row][col])
          temp.push({ row: row, column: col })
          promises.push(fadePromise)
        } else {
          this.board.cells[row][col].isNew = false
        }
      }
    }
    await Promise.all(promises)
    this.#resetVisitedFlags()
    return temp
  }

  async removeMatchedCells(pairs: Pair[]): Promise<Pair[]> {
    if (!pairs || pairs.length === 0) return []

    const removeDiamon: Pair[] = []
    const promises: Promise<void>[] = []

    // 1. Clear ô chính
    for (const pair of pairs) {
      const cell = this.board.cells[pair.row][pair.column]
      if (!this.board.cells[pair.row][pair.column].isNew) {
        // Nếu là skill, ghi lại match đặc biệt
        if (cell.type !== TYPECELL.NORMAL) {
          const related = this.#handleSpecialSkill(pair.row, pair.column)
          promises.push(
            ...related
              .filter(([r, c]) => pair.row !== r || pair.column !== c)
              .map(([r, c]) => this.#removeCellWithEffect({ row: r, column: c }, removeDiamon))
          )
        }
        promises.push(this.#resetCell(pair, removeDiamon))
      } else {
        this.board.cells[pair.row][pair.column].isNew = false
        continue
      }
    }

    // 2. Refresh và return kết quả
    await Promise.all(promises)
    this.#resetVisitedFlags()
    return removeDiamon
  }
  #removeCellWithEffect(pair: Pair, removeDiamon: Pair[]): Promise<void> {
    const { row, column } = pair
    const cell = this.board.cells[row][column]

    // Nếu là skill → đưa vào queue xử lý riêng
    if (cell.type !== TYPECELL.NORMAL) {
      if (cell.type !== TYPECELL.DESTROY) {
        this.preKey = cell.index
      }
      this.queue.push([pair])
      return Promise.resolve() // Không xoá liền
    }

    // const fade = this.effectManager.fadeAndShrinkEffect(column, row, 40, 400)

    // // Reset trạng thái cell
    // cell.index = 0
    // cell.type = TYPECELL.NORMAL
    // cell.attribute.colorFill = config.COLOR.default
    // cell.isQueue = false

    // this.#clearCellByIndex(column, row, cell)
    // removeDiamon.push(pair)

    return this.#resetCell(pair, removeDiamon)
  }
  #resetCell(pair: Pair, removeDiamon: Pair[]): Promise<void> {
    const { row, column } = pair
    const cell = this.board.cells[row][column]
    const fade = this.effectManager.fadeAndShrinkEffect(column, row, 40, 400)

    // Reset trạng thái cell
    cell.index = 0
    cell.type = TYPECELL.NORMAL
    cell.attribute.colorFill = config.COLOR.default
    cell.isQueue = false

    this.#clearCellByIndex(column, row, cell)
    removeDiamon.push(pair)
    return fade
  }
  #resetVisitedFlags() {
    this.board.cells.forEach((row) => {
      return row.forEach((cell) => {
        if (cell.isVisited) cell.isVisited = false
        if (cell.isNew) cell.isNew = false
      })
    })
  }

  /* Handle Skill */
  #getNumbers(num: number): number[] {
    return Array.from({ length: num }, (_, i) => i)
  }
  #getNumbersAroundCell(i: number, j: number): number[][] {
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
        if (this.board.cells[i][j].index == this.preKey)
          //thay 3 thành index
          matches.push([i, j])
      }
    }
    return matches
  }
  #handleSpecialSkill(row: number, col: number): number[][] {
    // let row = matches[0];
    // let col = matches[1];
    let matches: number[][] = []
    switch (this.board.cells[row][col].type) {
      case TYPECELL.VERTICAL: {
        console.log('Power vertical.')
        this.#getNumbers(10).map((e) => matches.push([e, col]))
        break
      }
      case TYPECELL.HORIZONTAL: {
        console.log('Power horizontal.')
        this.#getNumbers(18).map((e) => matches.push([row, e]))
        break
      }
      case TYPECELL.BOOM: {
        matches.push(...this.#getNumbersAroundCell(row, col))
        break
      }
      case TYPECELL.DESTROY: {
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
  /* #handleDoubleSkill(pair: Pair, type: TYPECELL, index: number) {
    const row = pair.row
    const col = pair.column
    let temp: number[][] = []
    // let matches = [];
    switch (type) {
      case TYPECELL.CROSS: {
        console.log('Power CROSS.')
        const arrCols: number[] = this.#dfsSkill(col, col - 1, [], 18)
        const arrRows: number[] = this.#dfsSkill(row, row - 1, [], 10)
        if (arrCols.length) {
          arrCols.map((e) => temp.push([row, e]))
        }
        if (arrRows.length) {
          arrRows.map((e) => temp.push([e, col]))
        }

        break
      }

      case TYPECELL.COMBO_BOOM: {
        console.log('COMBO_BOOM')
        const arrCols: number[] =this.#dfsSkill(col, col - 1, colsIndex, 18)
        const arrRows: number[] = this.#dfsSkill(row, row - 1, rowsIndex, 10)
        if (arrCols.length) {
          arrCols.map((e) => {
            temp.push([row, e])
            if (row + 1 < 10 && row + 1 >= 0) {
              temp.push([row + 1, e])
            }
            if (row - 1 < 10 && row - 1 >= 0) {
              temp.push([row - 1, e])
            }
          })
        }
        if (arrRows.length) {
          arrRows.map((e) => {
            temp.push([e, col])
            if (col + 1 < 18 && col + 1 >= 0) {
              temp.push([e, col + 1])
            }
            if (col - 1 < 18 && col - 1 >= 0) {
              temp.push([e, col - 1])
            }
          })
        }
        break
      }
      case TYPECELL.MEGA_BOOM: {
        //2 BOOM
        const dx = [-1, 0, 1, 1, 1, 0, -1, -1, -2, 0, 2, 2, 2, 0, -2, -2]
        const dy = [-1, -1, -1, 0, 1, 1, 1, 0, -2, -2, -2, 0, 2, 2, 2, 0]
        this.#dfsSkillBoom(row, col, dx, dy, temp)
        break
      }

      case TYPECELL.EXTRA_DESTROY: {
        //hori or verti + DESTROY
        temp = this.#clearByKey()
        temp.forEach((e) => {
          this.board.cells[e[0]][e[1]].index == index
        })
        break
      }

      case TYPECELL.MULTI_DESTROY: {
        //2 DESTROY
        break
      }

      case TYPECELL.ULTRA_DESTROY: {
        //DESTROY + BOOM
        temp = this.#clearByKey()
        temp.forEach((e) => {
          this.board.cells[e[0][1]].index == index
        })
        break
      }
    }
    if (temp.length) {
      return temp
    }
  } */
}
