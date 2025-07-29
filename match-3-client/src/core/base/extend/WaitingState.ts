import { Events } from '../../../enums/Event'
import { GameStateType } from '../../../enums/GameStateType'
import { Pair } from '../../../types/Pair'
import { EventBus } from '../../pattern/EventBus'
import { GameState } from '../GameState'

export class WaitingState extends GameState {
  private firstPick: Pair | null = null
  private boundHandleWaitingState = this.handleWaitingState.bind(this)
  public enter(): void {
    console.log('Wating >>>>> Enter()')
    EventBus.subscribe(Events.ClickedEvent, this.boundHandleWaitingState)
  }
  public update(deltaTime: number): void {
    console.log('Wating >>>>> Update()')
  }
  public exit(): void {
    // throw new Error('Method not implemented.')
    console.log('Wating >>>>> Exit()')
    EventBus.unsubscribe(Events.ClickedEvent, this.boundHandleWaitingState)
  }
  //xử lý sự kiện click
  private handleWaitingState(pick: Pair): void {
    if (!this.firstPick) {
      this.firstPick = pick as Pair
      this.boardRender?.click(this.firstPick, null)
    }
    if (this.isAdjacent(this.firstPick, pick)) {
      this.context.setState(GameStateType.SwapingState)
      EventBus.publish(Events.SwapEvent, { firstPick: this.firstPick, secondPick: pick })
      this.firstPick = null
    } else {
      this.boardRender?.click(pick as Pair, this.firstPick as Pair)
      this.firstPick = pick
    }
  }

  private isAdjacent(primary: Pair, second: Pair) {
    return (
      Math.abs(primary.row - second.row) + Math.abs(primary.column - second.column) === 1 &&
      this.boardRender.isAdjacent(primary, second)
    )
  }
}
