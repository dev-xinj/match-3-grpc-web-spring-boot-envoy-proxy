import { Events } from '../../../enums/Event'
import { Pair } from '../../../types/Pair'
import { EventBus } from '../../pattern/EventBus'
import { GameState } from '../GameState'

export class SwapFailingState extends GameState {
  private isSwapDone = false
  private firstPick: Pair | null = null
  private secondPick: Pair | null = null
  public enter(): void {
    console.log('Swaping Fail Enter() implemented.')
    // this.commandManager.undo()
    EventBus.subscribe(Events.SwapFailEvent, this.handleSwapFail.bind(this))
  }
  public update(deltaTime: number): void {
    // console.log('Swaping Fail Update() implemented.')
    // if (this.isSwapDone && this.firstPick != null && this.secondPick) {
    //   console.log('Swaping Fail Update() isSwapDone.')
    //   const command = new SwapCommand(this.boardRender, this.firstPick, this.secondPick)
    //   this.commandManager.executeCommand(command)
    //   this.context.setState(GameStateType.WaitingState)
    // }
  }
  public exit(): void {
    this.firstPick = null
    this.secondPick = null
    EventBus.unsubscribe(Events.SwapFailEvent, this.handleSwapFail.bind(this))
  }
  public handleSwapFail(positions: [Pair, Pair]) {
    const [firstPick, secondPick] = positions
    this.firstPick = firstPick
    this.secondPick = secondPick
    console.log('handle Swaping Fail Command')
    this.boardRender.swapEffectManager(this.firstPick, this.secondPick, () => (this.isSwapDone = true))
  }
}
