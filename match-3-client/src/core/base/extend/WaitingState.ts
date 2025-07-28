import { Events } from '../../../enums/Event'
import { GameStateType } from '../../../enums/GameStateType'
import { Pair } from '../../../types/Pair'
import { EventBus } from '../../pattern/EventBus'
import { GameState } from '../GameState'

export class WaitingState extends GameState {
  private firstPick: Pair | null = null

  public enter(): void {
    console.log('Enter WaitingState')
    EventBus.subscribe(Events.ClickedEvent, this.handlePick.bind(this))
  }
  public update(deltaTime: number): void {
    console.log('Update() WaitingState')
  }
  public exit(): void {
    // throw new Error('Method not implemented.')
    console.log('Exiting WaitingState.')
    EventBus.unsubscribe(Events.ClickedEvent, this.handlePick.bind(this))
  }
  private handlePick(pick: Pair): void {
    if (!this.firstPick) {
      this.firstPick = pick as Pair
      this.boardRender?.click(this.firstPick, null)
    }
    if (this.isAdjacent(this.firstPick, pick)) {
      this.context.setState(GameStateType.SwapingState)
      EventBus.publish(Events.SwapEvent, [this.firstPick, pick])
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
