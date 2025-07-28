import { BoardRenderer } from '../../models/BoardRender'
import { Pair } from '../../types/Pair'
import { Command } from './Command'

export class SwapCommand implements Command {
  constructor(
    private boardRender: BoardRenderer,
    private firstPick: Pair,
    private secondPick: Pair
  ) {}
  execute(): void {
    console.log('//////////')
    try {
      this.boardRender.board.swap(this.firstPick, this.secondPick)
    } catch (error) {
      console.log(error)
    }
  }
  undo(): void {
    this.boardRender.swapEffectCommand(this.firstPick, this.secondPick)
  }
}
