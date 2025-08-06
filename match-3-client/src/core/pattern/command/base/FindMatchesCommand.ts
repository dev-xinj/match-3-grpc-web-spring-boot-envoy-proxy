import { BoardAdapter } from '../../../../services/BoardAdapter'
import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { Command } from '../Command'
export class FindMatchesCommand implements Command {
  private result: Promise<CellPosition[][] | null> | null = null
  constructor(
    private board: Main,
    private boardAdapter: BoardAdapter,
    private data: { firstCellPosition: CellPosition; secondCellPosition: CellPosition }
  ) {}

  async execute(): Promise<void> {
    console.log('FindMatchesCommand >>>>> Execute()')
    this.result = this.board.handleMatchResolverCommand(this.boardAdapter, this.data)
    // this.boardRender.matchResolver(convert(this.matchesApi))
  }
  async undo(): Promise<void> {
    console.log('FindMatchesCommand >>>>> Undo()')
  }
  getResult() {
    return this.result
  }
}
