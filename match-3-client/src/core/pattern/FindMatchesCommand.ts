import { BoardRenderer } from '../../models/BoardRender'
import { BoardAdapter } from '../../services/BoardAdapter'
import { Pair } from '../../types/Pair'
import { Command } from './Command'
export class FindMatchesCommand implements Command {
  private result: Promise<Pair[][] | null> | null = null
  constructor(
    private boardRender: BoardRenderer,
    private boardAdapter: BoardAdapter,
    private data: { firstPair: Pair; secondPair: Pair }
  ) {}

  async execute(): Promise<void> {
    console.log('FindMatchesCommand >>>>> Execute()')
    this.result = this.boardRender.handleMatchResolverCommand(this.boardAdapter, this.data)
    // this.boardRender.matchResolver(convert(this.matchesApi))
  }
  async undo(): Promise<void> {
    console.log('FindMatchesCommand >>>>> Undo()')
  }
  getResult() {
    return this.result
  }
}
