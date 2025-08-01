import { BoardRenderer } from '../../../../models/BoardRender'
import { Command } from '../Command'

export class FillingCommand implements Command {
  constructor(
    private boardRender: BoardRenderer,
    private emptyRow: number,
    private col: number
  ) {}

  async execute(): Promise<void> {
    console.log('Filling >>>>> Execute()')
    this.boardRender.fillingBoardCommand(this.emptyRow, this.col)
    return Promise.resolve()
  }
  undo(): Promise<void> {
    console.log('Falling >>>>> Undo()')
    return Promise.resolve()
  }
}
