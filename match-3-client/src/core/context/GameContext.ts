import { MatchApi } from '../../api/models/MatchApi'
import { Events } from '../../enums/Event'
import { GameStateType } from '../../enums/GameStateType'
import { TYPECELL } from '../../enums/TypeCell'
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
import { ClearCommand } from '../pattern/command/base/ClearCommand'
import { Command } from '../pattern/command/Command'
import { CommandManager } from '../pattern/command/base/CommandManaget'
import { EventBus } from '../pattern/EventBus'
import { FallingCommand } from '../pattern/command/base/FallingCommand'
import { FillingCommand } from '../pattern/command/base/FillingCommand'
import { FindMatchesCommand } from '../pattern/command/base/FindMatchesCommand'
import { SwapCommand } from '../pattern/command/base/SwapCommand'

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
  public setState(stateKey: string) {
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
    const checkFindMatches = await this.boardAdapter.checkHasMatchesAdapter(this.boardRender.board.cells)
    const command = new FindMatchesCommand(this.boardRender, this.boardAdapter, data)
    if (checkFindMatches.getData()) {
      await this.commandManager.executeCommand(command)
    }
    const pairResult = await command.getResult()
    if (pairResult !== null && pairResult.length > 0) {
      this.setState(GameStateType.ClearingState)
      EventBus.publish(Events.ClearingEvent, pairResult)
    } else {
      if (data) {
        /* Trường hợp có data nghĩa là người dùng swap, ngược lại là logic load game auto scan */
        console.log('Not Found Match. >>>> UNDO')
        this.setState(GameStateType.SwapingState)
        console.log('>>>> UNDO <<<<')
        await this.commandManager.undo()
        // await this.commandManager.undo()
      }
      this.setState(GameStateType.WaitingState)
    }
  }

  public async handleClearingContext(arrMatch: Pair[][]) {
    console.log('Clearing >>>>> Context()')

    const command = new ClearCommand(this.boardRender, arrMatch)
    await this.commandManager.executeCommand(command)
    const result = await command.getResutl()

    await this.currentState.delay(300)
    this.setState(GameStateType.FallingState)
    EventBus.publish(Events.FallingEvent, result)
  }
  public async handleFallingContext(promises: Promise<Pair[]>[]) {
    console.log('Falling >>>>> Context()')
    const rows = 10
    const results = await Promise.all(promises)
    await this.currentState.delay(300)
    for (const item of results) {
      const columns = [...new Set(item.map((e) => e.column).sort((a, b) => a - b))]
      for (const col of columns) {
        const command = new FallingCommand(this.boardRender, col, rows)
        await this.commandManager.executeCommand(command)
        const emptyRow = command.getResult()
        if (emptyRow != null) {
          await this.handleFillingContext({ emptyRow: emptyRow, col: col })
        }
      }
    }

    if (this.boardRender.queue.length > 0) {
      await this.currentState.delay(300)
      this.setState(GameStateType.ClearingState)
      EventBus.publish(Events.ClearingEvent, this.boardRender.queue)
      this.boardRender.queue = []
    } else {
      await this.currentState.delay(300)
      this.setState(GameStateType.MatchingState)
      EventBus.publish(Events.FindMatcherEvent, null)
    }
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
