import { Events } from '../../../enums/Event'
import { GameStateType } from '../../../enums/GameStateType'
import { Pair } from '../../../types/Pair'
import { EventBus } from '../../pattern/EventBus'
import { SwapCommand } from '../../pattern/SwapCommand'
import { GameState } from '../GameState'

export class SwapingState extends GameState {
  private isSwapDone = false
  private firstPick: Pair | null = null
  private secondPick: Pair | null = null
  public enter(): void {
    console.log('Swaping Enter() implemented.')
    // this.commandManager.undo()
    EventBus.subscribe(Events.SwapEvent, this.handleSwap.bind(this))
  }
  public update(deltaTime: number): void {
    console.log('Swaping Update() implemented.')
    if (this.isSwapDone && this.firstPick != null && this.secondPick) {
      console.log('Swaping Update() isSwapDone.')
      const command = new SwapCommand(this.boardRender, this.firstPick, this.secondPick)
      this.commandManager.executeCommand(command)
      this.context.setState(GameStateType.MatchingState)
      EventBus.publish(Events.FindMatcherEvent, [this.firstPick, this.secondPick])
    }
  }
  public exit(): void {
    this.firstPick = null
    this.secondPick = null
    EventBus.unsubscribe(Events.SwapEvent, this.handleSwap.bind(this))
  }
  public handleSwap(positions: [Pair, Pair]) {
    const [firstPick, secondPick] = positions
    this.firstPick = firstPick
    this.secondPick = secondPick
    console.log('handle Swaping Command')
    this.boardRender.swapEffectManager(this.firstPick, this.secondPick, () => (this.isSwapDone = true))
  }
}
