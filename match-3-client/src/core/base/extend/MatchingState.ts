import { MatchApi } from '../../../api/models/MatchApi'
import { Events } from '../../../enums/Event'
import { GameStateType } from '../../../enums/GameStateType'
import { Pair } from '../../../types/Pair'
import { EventBus } from '../../pattern/EventBus'
import { FindMacherCommand } from '../../pattern/FindMacherCommand'
import { GameState } from '../GameState'

export class MatchingState extends GameState {
  public enter(): void {
    console.log('Entering MatchingState')
    EventBus.subscribe(Events.FindMatcherEvent, this.handleFindMatcher.bind(this))
  }
  public update(deltaTime: number): void {
    console.log('Update  MatchingState')
  }
  public exit(): void {
    EventBus.unsubscribe(Events.FindMatcherEvent, this.handleFindMatcher.bind(this))
  }

  public handleFindMatcher(positions: [Pair, Pair]) {
    console.log('handle FindMatcher Command')
    this.boardRender.board.findMatchAt().then((data) => {
      const matchesApi: MatchApi[] = data.map((e) => Object.setPrototypeOf(e, MatchApi.prototype))
      // const matchesApi: MatchApi[] = Object.setPrototypeOf(await boardRender.board.findMatchAt(), MatchApi.prototype)
      if (matchesApi.length > 0) {
        const command = new FindMacherCommand(this.boardRender, matchesApi)
        this.commandManager.executeCommand(command)
      } else {
        // this.commandManager.undo()
        this.context.setState(GameStateType.SwapFailingState)
        EventBus.publish(Events.SwapFailEvent, positions)
      }
    })
  }
}
