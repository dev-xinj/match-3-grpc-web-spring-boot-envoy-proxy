import { Events } from '../../enums/Event'
import { GameStateType } from '../../enums/GameStateType'
import { EventBus } from '../pattern/EventBus'
import { GameContext } from './GameContext'

export class GameLoop {
  private lastTime: number = 0
  private animationFrameId: number | null = null
  constructor(private context: GameContext) {
    EventBus.subscribe(Events.GameOverEvent, this.stop.bind(this))
  }
  public run(currentTime: number) {
    if (this.animationFrameId === null) {
      return
    }
    const deltaTime = (currentTime - this.lastTime) / 1000
    this.lastTime = currentTime
    this.context.update(deltaTime)
    this.animationFrameId = requestAnimationFrame(this.run.bind(this))
  }
  public start(): void {
    if (this.animationFrameId === null) {
      this.context.getBoardRender().loadAll()
      this.lastTime = performance.now()
      this.animationFrameId = requestAnimationFrame(this.run.bind(this))
    }
  }
  public stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = null
    }
  }
}
