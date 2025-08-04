import { AssetManager } from '../logic/AssetManager'
import { BaseCell } from '../models/BaseCell'
import { CellPosition } from './CellPosition'

export class Main {
  private cells: BaseCell[][]
  private rows: number
  private cols: number
  private cellSize: number
  private assetManger: AssetManager
  private ctx: CanvasRenderingContext2D
  //private possibleColors" string[]=[]
  constructor(
    rows: number,
    cols: number,
    baseCell: BaseCell[][],
    cellSize: number,
    assetManager: AssetManager,
    ctx: CanvasRenderingContext2D
  ) {
    this.rows = rows
    this.cols = cols
    this.cellSize = cellSize
    this.assetManger = assetManager
    this.cells = baseCell
    this.ctx = ctx
    this.draw()
  }
  async draw() {
    const { ctx } = this
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const rows: number = this.rows
    const columns: number = this.cols
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const position = new CellPosition(i, j)
        this.drawCell(position)
      }
    }
  }
  //Khởi tạo vẽ image
  drawCell(position: CellPosition) {
    const { row, col } = position
    const { ctx } = this
    const cell = this.getCellAt(position)
    ctx.clearRect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
    ctx.fillStyle = cell.attribute.colorFill
    ctx.fillRect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
    ctx.lineWidth = 3
    ctx.globalAlpha = 1.0
    ctx.strokeStyle = cell.attribute.colorBorder
    ctx.strokeRect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
    const img = this.assetManger.getImageByTypeAndIndex(cell.type, cell.index)
    ctx.drawImage(img, col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
  }
  //kiểm tra vị trí hợp lệ
  private isValidPosition(firstPosCell: CellPosition, secondPosCell: CellPosition) {
    return (
      Math.abs(firstPosCell.row - secondPosCell.row) + Math.abs(firstPosCell.col - secondPosCell.col) === 1 &&
      this.isAdjacent(firstPosCell, secondPosCell)
    )
  }

  private isAdjacent(firstPosCell: CellPosition, secondPosCell: CellPosition): boolean {
    const firstCell = this.getCellAt(firstPosCell)
    const secondCell = this.getCellAt(secondPosCell)
    return (
      // board.cells[primary.row][primary.column].type !== board.cells[second.row][second.column].type &&
      firstCell.index !== secondCell.index
    )
  }
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
  // Thêm item vào bảng
  public addCell(cell: BaseCell): boolean {
    const { row, col } = cell.position
    if (row >= 0 && row < this.cols && col >= 0 && col < this.rows) {
      this.cells[col][row] = cell
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
  public swapCells(firstPosCell: CellPosition, secondPosCell: CellPosition) {}

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
  clearAllCellsOfSameType(position: CellPosition, srcCell: BaseCell): void {
    console.log(`Xóa tất cả item ${srcCell.color} cùng màu với item tại (${position.row}, ${position.col})`)
    // Logic xóa item cùng loại
  }
}
