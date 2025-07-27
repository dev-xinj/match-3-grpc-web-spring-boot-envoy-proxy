import { GameContext } from '../context/GameContext'
export abstract class GameState {
  protected context!: GameContext

  setContext(context: GameContext) {
    this.context = context
  }

  public abstract enter(): void
  public abstract update(deltaTime: number): void
  public abstract exit(): void
}
