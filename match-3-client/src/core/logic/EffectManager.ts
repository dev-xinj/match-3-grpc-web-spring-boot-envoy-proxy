import { config } from "../../constants/config"

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
}
