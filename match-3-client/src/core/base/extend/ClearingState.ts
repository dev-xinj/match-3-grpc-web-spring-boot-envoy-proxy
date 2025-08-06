import { Events } from '../../../enums/Event'
import { CellPosition } from '../../main/CellPosition'
import { EventBus } from '../../pattern/events/EventBus'
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
  private async handleClearingState(arrMatch: CellPosition[][]) {
    console.log('Clearing >>>>> Handle()')
    await this.context.handleClearingContext(arrMatch)
  }
}
