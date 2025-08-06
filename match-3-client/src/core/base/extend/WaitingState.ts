import { Events } from '../../../enums/Event'
import { GameStateType } from '../../../enums/GameStateType'
import { CellPosition } from '../../main/CellPosition'
import { EventBus } from '../../pattern/events/EventBus'
import { GameState } from '../GameState'

export class WaitingState extends GameState {
  private firstPick: CellPosition | null = null
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
  private handleWaitingState(pick: CellPosition): void {
    if (!this.firstPick) {
      this.firstPick = pick as CellPosition
      this.board?.click(this.firstPick, null)
    }
    if (this.isAdjacent(this.firstPick, pick)) {
      this.context.setState(GameStateType.SwapingState)
      EventBus.publish(Events.SwapEvent, { firstCellPosition: this.firstPick, secondCellPosition: pick })
      this.firstPick = null
    } else {
      this.board?.click(pick as CellPosition, this.firstPick as CellPosition)
      this.firstPick = pick
    }
  }

  private isAdjacent(primary: CellPosition, second: CellPosition) {
    return this.board.isValidPosition(primary, second)
  }
}
