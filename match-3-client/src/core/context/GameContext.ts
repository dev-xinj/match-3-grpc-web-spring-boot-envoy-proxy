import { MatchApi } from '../../api/models/MatchApi'
import { Events } from '../../enums/Event'
import { GameStateType } from '../../enums/GameStateType'
import { BoardRenderer } from '../../models/BoardRender'
import { BoardAdapter } from '../../services/BoardAdapter'
import { MatchCommand } from '../../types/MatchCommand'
import { Pair } from '../../types/Pair'
import { ClearingState } from '../base/extend/ClearingState'
import { FillingState } from '../base/extend/FillingState'
import { MatchingState } from '../base/extend/MatchingState'
import { SwapFailingState } from '../base/extend/SwapFailingState'
import { SwapingState } from '../base/extend/SwapingState'
import { WaitingState } from '../base/extend/WaitingState'
import { GameState } from '../base/GameState'
import { CommandManager } from '../pattern/CommandManaget'
import { EventBus } from '../pattern/EventBus'
import { FindMatchesCommand } from '../pattern/FindMatchesCommand'
import { SwapCommand } from '../pattern/SwapCommand'

export class GameContext {
  private currentState!: GameState
  private boardRender: BoardRenderer
  private commandManager: CommandManager
  private boardAdapter: BoardAdapter
  private stateRegistry: { [key: string]: () => GameState } = {
    WAITING_STATE: () => new WaitingState(),
    SWAPING_STATE: () => new SwapingState(),
    SWAP_FALLING_STATE: () => new SwapFailingState(),
    // 'SWAPPING': () => new SwappingState(),
    MATCHING_STATE: () => new MatchingState(),
    FILLING_STATE: () => new FillingState(),
    CLEARING_STATE: () => new ClearingState()
  }
  constructor(boardRender: BoardRenderer) {
    this.boardRender = boardRender
    this.commandManager = new CommandManager()
    this.boardAdapter = new BoardAdapter()
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

  public async handleSwapContext(firstPick: Pair, secondPick: Pair) {
    console.log('Swaping >>>>> Context()')
    const command = new SwapCommand(this.boardRender, firstPick, secondPick)
    await this.commandManager.executeCommand(command)
    this.setState(GameStateType.MatchingState)
    EventBus.publish(Events.FindMatcherEvent, null)
  }

  public async handleMatchingContext() {
    console.log('Matching >>>>> Context()')
    const matchesApi: MatchApi[] = await this.boardAdapter.findMatchesAdapter(this.boardRender.board.cells)
    if (matchesApi.length > 0) {
      const command = new FindMatchesCommand(this.boardRender, matchesApi)
      await this.commandManager.executeCommand(command)
      this.setState(GameStateType.ClearingState)
      EventBus.publish(Events.ClearingEvent, command.getResult())
    } else {
      console.log('Not Found Match. >>>> UNDO')
      this.setState(GameStateType.SwapingState)
      console.log('>>>> UNDO <<<<')
      await this.commandManager.undo()
      this.setState(GameStateType.WaitingState)
    }
  }
  public async handleClearingContext(matchesCommand: MatchCommand) {
    console.log('Clearing >>>>> Context()')
    await this.boardRender.removeEffectCommand(matchesCommand.arrPair, matchesCommand.promises)
    console.log('>>>> Remove <<<<')
    this.setState(GameStateType.WaitingState)
  }
  // Getters
  public getBoardRender() {
    return this.boardRender
  }
  public getCommandManager() {
    return this.commandManager
  }
}
