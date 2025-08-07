import { Events } from '../../../enums/Event'
import { CellPosition } from '../../main/CellPosition'
import { EventBus } from '../../pattern/events/EventBus'
import { GameState } from '../GameState'
export class FallingState extends GameState {
  private boundHandleFallingState = this.handleFallingState.bind(this)
  public enter(): void {
    console.log('Falling >>>>> Enter()')
    EventBus.subscribe(Events.FallingEvent, this.boundHandleFallingState)
  }
  public update(deltaTime: number): void {
    console.log('Falling >>>>> Update()')
  }

  public exit(): void {
    console.log('Falling >>>>> Exit()')
    EventBus.unsubscribe(Events.FallingEvent, this.boundHandleFallingState)
  }

  public async handleFallingState(resutls: CellPosition[]) {
    console.log('Falling >>>>> Handle()')
    this.delay(300)
    await this.context.handleFallingContext(resutls)
  }
}
