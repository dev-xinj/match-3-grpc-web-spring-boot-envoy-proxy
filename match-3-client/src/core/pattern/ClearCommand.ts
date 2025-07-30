import { BoardRenderer } from '../../models/BoardRender'
import { Pair } from '../../types/Pair'
import { Command } from './Command'

export class ClearCommand implements Command {
  private result: Promise<Pair[]>[] | null = null
  constructor(
    private boardRender: BoardRenderer,
    private arrMatch: Pair[][]
  ) {}
  async execute(): Promise<void> {
    console.log('ClearCommand >>>>> Execute()')
    this.result = this.boardRender.handleRemoveMatchesCellCommand(this.arrMatch)
  }
  async undo(): Promise<void> {
    console.log('ClearCommand >>>>> Undo()')
  }
  public getResutl() {
    return this.result
  }
}
