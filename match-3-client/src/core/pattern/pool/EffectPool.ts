import { Localtion } from '../../../types/Localtion'
import { EffectManager } from '../../logic/EffectManager'
import { CellPosition } from '../../main/CellPosition'
import { EffectExecutor } from './EffectExecutor'

export class EffectPool {
  private pool: EffectExecutor[] = []
  private typePool: string
  private effectManager: EffectManager

  constructor(typePool: string, sizePool: number, effectManager: EffectManager) {
    this.typePool = typePool
    this.effectManager = effectManager
    this.initializePool(sizePool)
  }

  private initializePool(sizePool: number) {
    for (let i = 0; i < sizePool; i++) {
      const effect = this.createEffect()
      this.pool.push(effect)
    }
  }
  /* Lấy effect từ trong pool */
  private getEffect() {
    for (let i = 0; i < this.pool.length; i++) {
      if (!this.pool[i].active) {
        return this.pool[i]
      }
    }
    /* nếu không có thì thêm mới một effect vào pool */
    const effect = this.createEffect()
    this.pool.push(effect)
    return effect
  }
  private createEffect(): EffectExecutor {
    return {
      active: false,
      type: this.typePool,
      reset: function () {
        this.active = false
      }
    }
  }
  /* Thực thi hiệu ứng */
  public async play(
    position: CellPosition,
    callBack: (position: CellPosition, localtion: Localtion) => void,
    secondPosition?: CellPosition
  ) {
    const effect = this.getEffect()
    effect.active = true
    switch (effect.type) {
      case 'swap':
        await this.effectManager.swapEffect(
          position,
          secondPosition,
          40,
          200,
          (position: CellPosition, localtion: Localtion) => callBack(position, localtion)
        )
        /* reset trả lại pool */
        effect.reset()
        break

      default:
        break
    }
  }
  returnPool(effect: EffectExecutor) {
    effect.active = false
  }
}
