import { config } from '../../constants/config'
import { Pair } from '../../types/Pair'

export class RenderManager {
  private ctx: CanvasRenderingContext2D
  private cellSize: number

  constructor(ctx: CanvasRenderingContext2D, cellSize: number) {
    this.ctx = ctx
    this.cellSize = cellSize
  }
  drawCell(pair: Pair, image: HTMLImageElement) {
    const { row, column } = pair
    const { ctx } = this
    const x = column * this.cellSize
    const y = row * this.cellSize
    this.highlightCell(row, column, config.COLOR.border)
    ctx.drawImage(image, x, y, this.cellSize, this.cellSize)
  }

  /**
   * Vẽ highlight hiệu ứng chọn
   */
  highlightCell(row: number, col: number, color = config.COLOR.border): void {
    const x = col * this.cellSize
    const y = row * this.cellSize
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = 3
    this.ctx.strokeRect(x, y, this.cellSize, this.cellSize)
  }

  /**
   * Xóa canvas (clear toàn bộ)
   */
  clearCanvas(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }
}
