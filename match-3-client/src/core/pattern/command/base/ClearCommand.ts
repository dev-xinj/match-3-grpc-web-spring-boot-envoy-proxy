import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { Command } from '../Command'

export class ClearCommand implements Command {
  private result: Promise<CellPosition[]> | null = null
  constructor(
    private board: Main,
    private arrMatch: CellPosition[]
  ) {}
  async execute(): Promise<void> {
    console.log('ClearCommand >>>>> Execute()')
    this.result = this.board.handleRemoveMatchesCellCommand(this.arrMatch)
  }
  async undo(): Promise<void> {
    console.log('ClearCommand >>>>> Undo()')
  }
  public async getResutl() {
    return this.result
  }
}
