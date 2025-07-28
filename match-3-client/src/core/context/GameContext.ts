import { GameStateType } from '../../enums/GameStateType'
import { BoardRenderer } from '../../models/BoardRender'
import { FillingState } from '../base/extend/FillingState'
import { MatchingState } from '../base/extend/MatchingState'
import { SwapFailingState } from '../base/extend/SwapFailingState'
import { SwapingState } from '../base/extend/SwapingState'
import { WaitingState } from '../base/extend/WaitingState'
import { GameState } from '../base/GameState'
import { CommandManager } from '../pattern/CommandManaget'

export class GameContext {
  private currentState!: GameState
  private boardRender: BoardRenderer
  private commandManager: CommandManager
  private stateRegistry: { [key: string]: () => GameState } = {
    WAITING_STATE: () => new WaitingState(),
    SWAPING_STATE: () => new SwapingState(),
    SWAP_FALLING_STATE: () => new SwapFailingState(),
    // 'SWAPPING': () => new SwappingState(),
    MATCHING_STATE: () => new MatchingState(),
    FILLING_STATE: () => new FillingState()
  }
  constructor(boardRender: BoardRenderer) {
    this.boardRender = boardRender
    this.commandManager = new CommandManager()
    this.setState(GameStateType.WaitingState)
  }
  public update(deltaTime: number) {
    this.currentState.update(deltaTime)
  }
  public setState(stateKey: string): void {
    if (this.currentState) {
      this.currentState.exit()
    }
    const StateClass = this.stateRegistry[stateKey]
    if (StateClass) {
      this.currentState = StateClass()
      this.currentState.setContext(this)
      this.currentState.enter()
    } else {
      throw new Error(`Unknown state: ${stateKey}`)
    }
  }

  // Getters
  public getBoardRender() {
    return this.boardRender
  }
  public getCommandManager() {
    return this.commandManager
  }
}
