import { MatchApi } from '../../api/models/MatchApi'
import { BoardRenderer } from '../../models/BoardRender'
import { convert } from '../../models/ConvertToMatchType'
import { Pair } from '../../types/Pair'
import { Command } from './Command'
export class FindMatchesCommand implements Command {
  private result: Pair[][] | null = null
  constructor(
    private boardRender: BoardRenderer,
    private matchesApi: MatchApi[]
  ) {}

  async execute(): Promise<void> {
    console.log('FindMatchesCommand >>>>> Execute()')
    this.result = await this.boardRender.matchResolverCommand(convert(this.matchesApi))
    // this.boardRender.matchResolver(convert(this.matchesApi))
  }
  async undo(): Promise<void> {
    console.log('FindMatchesCommand >>>>> Undo()')
  }
  getResult() {
    return this.result
  }
}
