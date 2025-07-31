import { Events } from '../../../enums/Event'
import { Pair } from '../../../types/Pair'
import { EventBus } from '../../pattern/EventBus'
import { GameState } from '../GameState'

export class ClearingState extends GameState {
  private boundHandleClearingState = this.handleClearingState.bind(this)
  public enter(): void {
    EventBus.subscribe(Events.ClearingEvent, this.boundHandleClearingState)
  }
  public update(deltaTime: number): void {
    console.log('Clearing >>>>> Update()')

  }
  public exit(): void {
    console.log('Clearing >>>>> Exit()')
    EventBus.unsubscribe(Events.ClearingEvent, this.boundHandleClearingState)
  }
  private async handleClearingState(arrMatch: Pair[][]) {
    console.log('Clearing >>>>> Handle()')
    await this.context.handleClearingContext(arrMatch)
  }
}
