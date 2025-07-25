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
  drawViolentShakeImage(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    x: number,
    y: number,
    cellSize: number,
    progress: number
  ) {
    const baseAmplitude = 12 // độ rung mạnh hơn

    // Rung không liên tục, giật mạnh hơn
    const shakeX = (Math.random() - 0.5) * baseAmplitude * (1 - progress)
    const shakeY = (Math.random() - 0.5) * baseAmplitude * (1 - progress)

    ctx.save()
    ctx.translate(x + shakeX, y + shakeY)
    ctx.drawImage(img, 0, 0, cellSize, cellSize)
    ctx.restore()
  }
}
