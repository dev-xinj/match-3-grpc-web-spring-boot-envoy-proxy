import { BoardRenderer } from '../../models/BoardRender'
import { GameContext } from '../context/GameContext'
import { CommandManager } from '../pattern/command/base/CommandManaget'
export abstract class GameState {
  protected context!: GameContext
  protected boardRender!: BoardRenderer
  protected commandManager = new CommandManager()
  setContext(context: GameContext & { getBoardRender: () => BoardRenderer }) {
    this.context = context
    this.boardRender = context.getBoardRender()
  }

  public abstract enter(): void
  public abstract update(deltaTime: number): void
  public abstract exit(): void
  public delay = (ms: number) => new Promise((res) => setTimeout(res, ms))
}
