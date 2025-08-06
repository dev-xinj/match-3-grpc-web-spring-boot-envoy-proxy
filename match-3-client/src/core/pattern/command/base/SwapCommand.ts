import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { Command } from '../Command'

export class SwapCommand implements Command {
  constructor(
    private board: Main,
    private firstPick: CellPosition,
    private secondPick: CellPosition
  ) {}
  async execute(): Promise<void> {
    try {
      console.log('Swaping >>>>> Promise Done()')
      await this.board.swapEffectManager(this.firstPick, this.secondPick)
      // this.board.board.swap(this.firstPick, this.secondPick)
    } catch (error) {
      console.log(error)
    }
  }
  async undo(): Promise<void> {
    try {
      console.log('Swaping >>>>> Undo()')
      await this.board.swapEffectManager(this.firstPick, this.secondPick)
      // this.board.swap(this.firstPick, this.secondPick)
    } catch (err) {
      console.log(err)
    }
  }
}
