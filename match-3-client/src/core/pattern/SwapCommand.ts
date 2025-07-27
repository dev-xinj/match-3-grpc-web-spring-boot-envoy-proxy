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
    this.boardRender.handlePick(this.firstPick, this.secondPick)
  }
  undo(): void {
    throw new Error('Method not implemented.')
  }
}
