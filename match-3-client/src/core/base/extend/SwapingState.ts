import { Events } from '../../../enums/Event'
import { Pair } from '../../../types/Pair'
import { CellPosition } from '../../main/CellPosition'
import { EventBus } from '../../pattern/events/EventBus'
import { GameState } from '../GameState'

export class SwapingState extends GameState {
  private boundHandleSwapState = this.handleSwapState.bind(this)
  public enter(): void {
    console.log('Swaping >>>>> Enter()')
    // this.commandManager.undo()
    EventBus.subscribe(Events.SwapEvent, this.boundHandleSwapState)
  }
  public update(deltaTime: number): void {
    console.log('Swaping >>>>> Update()')
  }
  public exit(): void {
    console.log('Swaping >>>>> Exit()')
    EventBus.unsubscribe(Events.SwapEvent, this.boundHandleSwapState)
  }
  public async handleSwapState(data: { firstCellPosition: CellPosition; secondCellPosition: CellPosition }) {
    console.log('Swaping >>>>> Handle()')
    await this.context.handleSwapContext(data.firstCellPosition, data.secondCellPosition)
  }
}
