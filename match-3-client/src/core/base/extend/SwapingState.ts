import { Events } from '../../../enums/Event'
import { Pair } from '../../../types/Pair'
import { EventBus } from '../../pattern/EventBus'
import { GameState } from '../GameState'

export class SwapingState extends GameState {
  private isSwapDone = false
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
  public async handleSwapState(data: { firstPick: Pair; secondPick: Pair }) {
    console.log('Swaping >>>>> Handle()')
    await this.context.handleSwapContext(data.firstPick, data.secondPick)
  }
}
