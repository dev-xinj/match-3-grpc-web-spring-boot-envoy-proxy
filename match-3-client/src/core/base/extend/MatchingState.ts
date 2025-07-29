import { Events } from '../../../enums/Event'
import { EventBus } from '../../pattern/EventBus'
import { GameState } from '../GameState'

export class MatchingState extends GameState {
  private boundHandleMachingState = this.handleMachingState.bind(this)
  public enter(): void {
    console.log('Matching >>>>> Enter()')
    EventBus.subscribe(Events.FindMatcherEvent, this.boundHandleMachingState)
  }
  public update(deltaTime: number): void {
    console.log('Matching >>>>> Update()')
  }

  public exit(): void {
    console.log('Matching >>>>> Exit()')
    EventBus.unsubscribe(Events.FindMatcherEvent, this.boundHandleMachingState)
  }

  public async handleMachingState() {
    console.log('Matching >>>>> Handle()')
    await this.context.handleMatchingContext()
  }
}
