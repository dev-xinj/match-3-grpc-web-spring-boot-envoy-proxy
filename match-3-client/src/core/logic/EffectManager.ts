import { config } from '../../constants/config'
import { Pair } from '../../types/Pair'

export type AnimationFrameCallback = (progress: number) => void
export type CanvasEffect = {
  x: number
  y: number
  size: number
  duration: number
  onComplete?: () => void
}
export class EffectManager {
  private ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  // playExplosionEffect(effect: CanvasEffect) {
  //   const { x, y, size, duration, onComplete } = effect
  //   const start = performance.now()

  //   const draw = (now: number) => {
  //     const elapsed = now - start
  //     const progress = Math.min(elapsed / duration, 1)
  //     const alpha = 1 - progress
  //     const scale = 1 + progress * 1.5 // phóng to dần

  //     this.ctx.save()
  //     this.ctx.globalAlpha = alpha
  //     this.ctx.fillStyle = 'yellow'
  //     this.ctx.beginPath()
  //     this.ctx.arc(x + size / 2, y + size / 2, (size / 2) * scale, 0, Math.PI * 2)
  //     this.ctx.fill()
  //     this.ctx.restore()

  //     if (progress < 1) {
  //       requestAnimationFrame(draw)
  //     } else {
  //       onComplete?.()
  //     }
  //   }

  //   requestAnimationFrame(draw)
  // }
  playExplosionEffect(effect: CanvasEffect) {
    const { x, y, size, duration, onComplete } = effect
    const start = performance.now()

    const draw = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const alpha = 1 - progress
      const scale = 1 + progress * 0.8 // bớt phóng to lại

      this.ctx.save()

      // 👇 Clip chỉ trong phạm vi ô
      this.ctx.beginPath()
      this.ctx.rect(x, y, size, size)
      this.ctx.clip()

      this.ctx.globalAlpha = alpha
      this.ctx.fillStyle = 'rgba(255, 255, 100, 0.8)' // ánh sáng vàng

      // 👇 Vẽ vòng tròn chính giữa ô, scale nhẹ
      this.ctx.beginPath()
      this.ctx.arc(x + size / 2, y + size / 2, (size / 2) * scale, 0, Math.PI * 2)
      this.ctx.fill()

      this.ctx.restore()

      if (progress < 1) {
        requestAnimationFrame(draw)
      } else {
        onComplete?.()
      }
    }

    requestAnimationFrame(draw)
  }
  fadeAndShrinkEffect(col: number, row: number, originalSize: number, duration: number = 500): Promise<void> {
    const { ctx } = this
    return new Promise((resolve) => {
      const start = performance.now()

      const animate = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)

        const fadeOpacity = 1 - progress
        const currentSize = originalSize * (1 - progress)

        const x = col * originalSize + (originalSize - currentSize) / 2
        const y = row * originalSize + (originalSize - currentSize) / 2

        // Clear vùng cũ
        ctx.clearRect(col * originalSize, row * originalSize, originalSize, originalSize)

        // Vẽ hiệu ứng fade & shrink
        ctx.globalAlpha = fadeOpacity
        ctx.fillStyle = config.COLOR.default // bạn có thể đổi màu
        ctx.fillRect(x, y, currentSize, currentSize)
        ctx.globalAlpha = 1.0

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          resolve()
        }
      }

      requestAnimationFrame(animate)
    })
  }
  swapEffect(
    firstPick: Pair,
    secondPick: Pair,
    cellSize: number,
    duration: number = 300,
    drawCell: (row: number, col: number, x: number, y: number) => void,
    onComplete?: () => void
  ): void {
    const { row: row1, column: col1 } = firstPick
    const { row: row2, column: col2 } = secondPick
    const x1 = col1 * cellSize
    const y1 = row1 * cellSize
    const x2 = col2 * cellSize
    const y2 = row2 * cellSize

    const start = performance.now()
    const { ctx } = this

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)

      const currentX1 = x1 + (x2 - x1) * progress
      const currentY1 = y1 + (y2 - y1) * progress

      const currentX2 = x2 + (x1 - x2) * progress
      const currentY2 = y2 + (y1 - y2) * progress

      // Clear vùng 2 ô (có thể mở rộng nếu muốn)
      const minX = Math.min(x1, x2)
      const minY = Math.min(y1, y2)
      const clearWidth = Math.abs(x1 - x2) + cellSize
      const clearHeight = Math.abs(y1 - y2) + cellSize
      ctx.clearRect(minX, minY, clearWidth, clearHeight)

      // Vẽ lại 2 ô ở vị trí mới
      drawCell(row1, col1, currentX1, currentY1)
      drawCell(row2, col2, currentX2, currentY2)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        onComplete?.()
      }
    }

    requestAnimationFrame(animate)
  }
}
