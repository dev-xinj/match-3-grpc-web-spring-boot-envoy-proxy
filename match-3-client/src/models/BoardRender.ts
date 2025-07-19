import { config } from '../constants/config'
import { imageUIType } from '../constants/ItemUI'
import { Pair } from '../types/Pair'
import { Board } from './Board'
import { Cell } from './Cell'
import Shape from './Shape'

export class BoardRenderer {
  board: Board
  ctx: CanvasRenderingContext2D
  queue: number[]
  imgMgr: Shape
  cellSize: number = config.ATTRIBUTE.boxSize
  constructor(board: Board, ctx: CanvasRenderingContext2D) {
    this.board = board
    this.ctx = ctx
    this.queue = []
    this.imgMgr = new Shape(imageUIType)
  }
  loadAll() {
    this.imgMgr.loadAll().then(() => {
      this.draw()
    })
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
  draw() {
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
    ctx.fillStyle = cell.attribute.colorFill
    ctx.fillRect(column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
    ctx.lineWidth = 3
    ctx.globalAlpha = 1.0
    ctx.strokeStyle = cell.attribute.colorBorder
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
}
