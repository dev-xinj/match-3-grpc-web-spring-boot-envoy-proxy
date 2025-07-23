// export type AnimationFrameCallback = (progress: number) => void
// export type EffectEvent = {
//   duration: number // tổng thời gian (ms)
//   easing?: (t: number) => number // easing function, mặc định là linear
//   onUpdate: AnimationFrameCallback
//   onComplete?: () => void
// }
// export class EffectManager {
//   private effects: Set<number> = new Set()

//   runEffect({ duration, easing, onUpdate, onComplete }: EffectEvent) {
//     const start = performance.now()
//     const ease = easing || ((t: number) => t)

//     const drawFrame = (now: number) => {
//       const timeElapsed = now - start
//       const progress = Math.min(timeElapsed / duration, 1)
//       onUpdate(ease(progress))

//       if (progress < 1) {
//         const id = requestAnimationFrame(drawFrame)
//         this.effects.add(id)
//       } else {
//         onComplete?.()
//       }
//     }
//     const effectId = requestAnimationFrame(drawFrame)
//     this.effects.add(effectId)
//   }

//   cancelAll() {
//     for (const id of this.effects) {
//       cancelAnimationFrame(id)
//     }
//     this.effects.clear()
//   }
// }
