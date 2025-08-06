import { Main } from '../../../main/Main'
import { Command } from '../Command'

export class FallingCommand implements Command {
  private emptyRow: number | null = null
  constructor(
    private board: Main,
    private col: number,
    private rows: number
  ) {}

  async execute(): Promise<void> {
    console.log('Falling >>>>> Execute()')
    this.emptyRow = this.board.dropColl(this.rows, this.col)
    return Promise.resolve()
  }
  async undo(): Promise<void> {
    console.log('Falling >>>>> Undo()')
  }
  public getResult() {
    return this.emptyRow
  }
}
