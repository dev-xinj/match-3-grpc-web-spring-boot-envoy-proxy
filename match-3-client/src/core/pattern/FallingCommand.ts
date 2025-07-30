import { BoardRenderer } from '../../models/BoardRender'
import { Command } from './Command'

export class FallingCommand implements Command {
  private emptyRow: number | null = null
  constructor(
    private boardRender: BoardRenderer,
    private col: number,
    private rows: number
  ) {}

  async execute(): Promise<void> {
    console.log('Falling >>>>> Execute()')
    this.emptyRow = this.boardRender.dropColl(this.rows, this.col)
    return Promise.resolve()
  }
  async undo(): Promise<void> {
    console.log('Falling >>>>> Undo()')
  }
  public getResult() {
    return this.emptyRow
  }
}
