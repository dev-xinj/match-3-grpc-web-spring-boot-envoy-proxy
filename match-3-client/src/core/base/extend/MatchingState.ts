import { CellApi } from '../../../api/models/CellApi'
import { MatchApi } from '../../../api/models/MatchApi'
import { convert } from '../../../models/ConvertToMatchType'
import { findMatches } from '../../../services/BoardService'
import { EventBus } from '../../pattern/EventBus'
import { GameState } from '../GameState'
import { FallingState } from './FallingState'

export class MatchingState extends GameState {
  public enter(): void {
    console.log('Entering MatchingState')
    const boardRender = this.context.getBoardRender()
    boardRender.board.findMatchAt().then((data) => {
      const matchesApi: MatchApi[] = data.map((e) => Object.setPrototypeOf(e, MatchApi.prototype))
      // const matchesApi: MatchApi[] = Object.setPrototypeOf(await boardRender.board.findMatchAt(), MatchApi.prototype)
      console.log('match: ', matchesApi)
      if (matchesApi.length > 0) {
        boardRender.matchResolver(convert(matchesApi))
        EventBus.publish('matchingEvent', convert(matchesApi))
        this.context.setState(new FallingState())
      } else {
        EventBus.subscribe('SwapEvent', this.context.handleSwap.bind(this))
      }
    })

    // const matchesApi: MatchApi[] = data.map((e) => Object.setPrototypeOf(e, MatchApi.prototype))
    // const matchesApi: MatchApi[] = Object.setPrototypeOf(await boardRender.board.findMatchAt(), MatchApi.prototype)
  }
  public update(deltaTime: number): void {
    throw new Error('Method not implemented.')
  }
  public exit(): void {
    // throw new Error('Method not implemented.')
  }
}
