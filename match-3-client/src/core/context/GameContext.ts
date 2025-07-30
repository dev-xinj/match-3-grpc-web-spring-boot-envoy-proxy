import { MatchApi } from '../../api/models/MatchApi'
import { Events } from '../../enums/Event'
import { GameStateType } from '../../enums/GameStateType'
import { BoardRenderer } from '../../models/BoardRender'
import { BoardAdapter } from '../../services/BoardAdapter'
import { Match, Pair } from '../../types/Pair'
import { ClearingState } from '../base/extend/ClearingState'
import { FallingState } from '../base/extend/FallingState'
import { MatchingState } from '../base/extend/MatchingState'
import { SwapFailingState } from '../base/extend/SwapFailingState'
import { SwapingState } from '../base/extend/SwapingState'
import { WaitingState } from '../base/extend/WaitingState'
import { GameState } from '../base/GameState'
import { ClearCommand } from '../pattern/ClearCommand'
import { CommandManager } from '../pattern/CommandManaget'
import { EventBus } from '../pattern/EventBus'
import { FallingCommand } from '../pattern/FallingCommand'
import { FillingCommand } from '../pattern/FillingCommand'
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
    MATCHING_STATE: () => new MatchingState(),
    FALLING_STATE: () => new FallingState(),
    CLEARING_STATE: () => new ClearingState()
  }
  constructor(boardRender: BoardRenderer) {
    this.boardRender = boardRender
    this.commandManager = new CommandManager()
    this.boardAdapter = new BoardAdapter()
    this.setState(GameStateType.WaitingState)
    // this.setState(GameStateType.WaitingState)
    // EventBus.publish(Events.FindMatcherEvent, null)
  }
  public update(deltaTime: number) {
    this.currentState.update(deltaTime)
  }
  public async setState(stateKey: string): Promise<void> {
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

  public async handleSwapContext(firstPair: Pair, secondPair: Pair) {
    console.log('Swaping >>>>> Context()')
    const command = new SwapCommand(this.boardRender, firstPair, secondPair)
    await this.commandManager.executeCommand(command)
    this.setState(GameStateType.MatchingState)
    EventBus.publish(Events.FindMatcherEvent, { firstPair, secondPair })
  }

  public async handleMatchingContext(data: { firstPair: Pair; secondPair: Pair }) {
    console.log('Matching >>>>> Context()')
    if (data != null) {
      const matchesApi: MatchApi[] = await this.boardAdapter.findMatchesByIndexCellAdapter(
        this.boardRender.board.cells,
        data.firstPair,
        data.secondPair
      )
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
    } else {
      const matchesApi: MatchApi[] = await this.boardAdapter.findMatchesAdapter(this.boardRender.board.cells)
      if (matchesApi.length > 0) {
        const command = new FindMatchesCommand(this.boardRender, matchesApi)
        await this.commandManager.executeCommand(command)
        this.setState(GameStateType.ClearingState)
        EventBus.publish(Events.ClearingEvent, command.getResult())
      } else {
        this.setState(GameStateType.WaitingState)
      }
    }
  }
  public async handleClearingContext(arrMatch: Pair[][]) {
    console.log('Clearing >>>>> Context()')

    const command = new ClearCommand(this.boardRender, arrMatch)
    await this.commandManager.executeCommand(command)
    const result = command.getResutl()

    await this.currentState.delay(300)
    this.setState(GameStateType.FallingState)
    EventBus.publish(Events.FallingEvent, result)
  }
  public async handleFallingContext(promises: Promise<Pair[]>[]) {
    console.log('Falling >>>>> Context()')
    const rows = 10
    await Promise.all(promises).then(async (data) => {
      await this.currentState.delay(300)
      for (const item of data) {
        // data.forEach(async (item) => {
        const sortArr = [
          ...new Set(
            item
              .flatMap((e) => e.column)
              .sort((a, b) => a - b)
              .flat()
          )
        ]
        for (let i = 0; i < sortArr.length; i++) {
          const col = sortArr[i]
          const command = new FallingCommand(this.boardRender, col, rows)
          await this.commandManager.executeCommand(command)
          const emptyRow = command.getResult()
          if (emptyRow != null) {
            await this.handleFillingContext({ emptyRow: emptyRow, col: col })
          }
        }
      }
    })
    if (this.boardRender.queue.length > 0) {
      this.setState(GameStateType.ClearingState)
      EventBus.publish(Events.ClearingEvent, this.boardRender.queue)
      this.boardRender.queue = []
      // EventBus.publish(Events.FallingEvent, result)
    }
    await this.currentState.delay(300)
    this.setState(GameStateType.MatchingState)
    EventBus.publish(Events.FindMatcherEvent, null)
  }

  async handleFillingContext(data: { emptyRow: number; col: number }) {
    const command = new FillingCommand(this.boardRender, data.emptyRow, data.col)
    await this.commandManager.executeCommand(command)
    // this.setState(GameStateType.WaitingState)
  }
  // Getters
  public getBoardRender() {
    return this.boardRender
  }
  public getCommandManager() {
    return this.commandManager
  }
}
