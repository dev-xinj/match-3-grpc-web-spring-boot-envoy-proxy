import { Main } from '../../../main/Main'
import { Command } from '../Command'

export class FillingCommand implements Command {
  constructor(
    private board: Main,
    private emptyRow: number,
    private col: number
  ) {}

  async execute(): Promise<void> {
    console.log('Filling >>>>> Execute()')
    this.board.fillingBoardCommand(this.emptyRow, this.col)
    return Promise.resolve()
  }
  undo(): Promise<void> {
    console.log('Falling >>>>> Undo()')
    return Promise.resolve()
  }
}
