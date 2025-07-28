import { MatchApi } from '../../api/models/MatchApi'
import { BoardRenderer } from '../../models/BoardRender'
import { convert } from '../../models/ConvertToMatchType'
import { Command } from './Command'

export class FindMacherCommand implements Command {
  constructor(
    private boardRender: BoardRenderer,
    private matchesApi: MatchApi[]
  ) {}

  execute(): void {
    console.log('Execute FindMacherCommand ')
    this.boardRender.matchResolver(convert(this.matchesApi))
  }
  undo(): void {
    throw new Error('Method not implemented.')
  }
}
