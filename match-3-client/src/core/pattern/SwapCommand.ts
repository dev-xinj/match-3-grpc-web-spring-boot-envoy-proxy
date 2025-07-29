import { BoardRenderer } from '../../models/BoardRender'
import { Pair } from '../../types/Pair'
import { Command } from './Command'

export class SwapCommand implements Command {
  constructor(
    private boardRender: BoardRenderer,
    private firstPick: Pair,
    private secondPick: Pair
  ) {}
  async execute(): Promise<void> {
    try {
      console.log('Swaping >>>>> Promise Done()')
      await this.boardRender.swapEffectManager(this.firstPick, this.secondPick)
      this.boardRender.board.swap(this.firstPick, this.secondPick)
    } catch (error) {
      console.log(error)
    }
  }
  async undo(): Promise<void> {
    try {
      console.log('Swaping >>>>> Undo()')
      await this.boardRender.swapEffectManager(this.firstPick, this.secondPick)
      this.boardRender.board.swap(this.firstPick, this.secondPick)
    } catch (err) {
      console.log(err)
    }
  }
}
