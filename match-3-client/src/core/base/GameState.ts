import { BoardRenderer } from '../../models/BoardRender'
import { GameContext } from '../context/GameContext'
import { Main } from '../main/Main'
import { CommandManager } from '../pattern/command/base/CommandManaget'
export abstract class GameState {
  protected context!: GameContext
  protected boardRender!: BoardRenderer
  protected board!: Main
  protected commandManager = new CommandManager()
  setContext(context: GameContext & { getBoardRender: () => BoardRenderer } & { getBoard: () => Main }) {
    this.context = context
    this.boardRender = context.getBoardRender()
    this.board = context.getBoard()
  }

  public abstract enter(): void
  public abstract update(deltaTime: number): void
  public abstract exit(): void
  public delay = (ms: number) => new Promise((res) => setTimeout(res, ms))
}
