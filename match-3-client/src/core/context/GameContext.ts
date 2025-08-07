import { config } from '../../constants/config'
import { Events } from '../../enums/Event'
import { GameStateType } from '../../enums/GameStateType'
import { mockBaseCellsAPIWithDefault } from '../../example/MockCellApi'
import { BoardRenderer } from '../../models/BoardRender'
import { BoardAdapter } from '../../services/BoardAdapter'
import { ClearingState } from '../base/extend/ClearingState'
import { FallingState } from '../base/extend/FallingState'
import { MatchingState } from '../base/extend/MatchingState'
import { SwapFailingState } from '../base/extend/SwapFailingState'
import { SwapingState } from '../base/extend/SwapingState'
import { WaitingState } from '../base/extend/WaitingState'
import { GameState } from '../base/GameState'
import { AssetManager } from '../logic/AssetManager'
import { EffectManager } from '../logic/EffectManager'
import { CellPosition } from '../main/CellPosition'
import { Main } from '../main/Main'
import { ClearCommand } from '../pattern/command/base/ClearCommand'
import { CommandManager } from '../pattern/command/base/CommandManaget'
import { FallingCommand } from '../pattern/command/base/FallingCommand'
import { FillingCommand } from '../pattern/command/base/FillingCommand'
import { FindMatchesCommand } from '../pattern/command/base/FindMatchesCommand'
import { SwapCommand } from '../pattern/command/base/SwapCommand'
import { ComboSkillCommand } from '../pattern/command/skill/ComboSkillCommand'
import { EventBus } from '../pattern/events/EventBus'
import { ComboSkillManager } from '../pattern/strategies/managers/ComboSkillManager'

export class GameContext {
  private currentState!: GameState //Trạng thái game
  private boardRender: BoardRenderer
  private board: Main
  private commandManager: CommandManager /* gọi phương thức tới board */
  private boardAdapter: BoardAdapter /* Call API */
  private effectManager: EffectManager /* Quản lý hiệu ứng swap */
  private assetManager: AssetManager /* Quản lý tài nguyên như hình ảnh */
  private ctx: CanvasRenderingContext2D /* Vẽ canvas */
  private comboSkillManager: ComboSkillManager /* Quản lý skill combo */
  private stateRegistry: { [key: string]: () => GameState } = {}
  /* Properties của một game board */
  private rows = config.ATTRIBUTE.row
  private cols = config.ATTRIBUTE.column
  private cellSize = config.ATTRIBUTE.boxSize
  private pattern = '../assets/temp/*.png'

  constructor(boardRender: BoardRenderer, ctx: CanvasRenderingContext2D) {
    this.boardRender = boardRender
    this.ctx = ctx
    this.commandManager = new CommandManager()
    this.boardAdapter = new BoardAdapter()
    this.effectManager = new EffectManager(this.ctx)
    this.assetManager = new AssetManager(this.pattern)
    this.comboSkillManager = new ComboSkillManager()
    this.initContext()
    this.board = this.initBoard()
    this.setState(GameStateType.WaitingState)
  }
  initContext() {
    this.stateRegistry = {
      WAITING_STATE: () => new WaitingState(),
      SWAPING_STATE: () => new SwapingState(),
      SWAP_FALLING_STATE: () => new SwapFailingState(),
      MATCHING_STATE: () => new MatchingState(),
      FALLING_STATE: () => new FallingState(),
      CLEARING_STATE: () => new ClearingState()
    }
  }
  initBoard(): Main {
    return new Main(
      this.rows,
      this.cols,
      mockBaseCellsAPIWithDefault(),
      this.cellSize,
      this.assetManager,
      this.effectManager,
      this.comboSkillManager,
      this.ctx
    )
  }
  async loadAllImage() {
    await this.assetManager.loadAll()
    console.log('Load >>>>> Context()')
    return this
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
  //firstCellPosition
  //secondCellPosition
  public async handleSwapContext(firstCellPosition: CellPosition, secondCellPosition: CellPosition) {
    console.log('Swaping >>>>> Context()')
    const command = new SwapCommand(this.board, firstCellPosition, secondCellPosition)
    await this.commandManager.executeCommand(command)
    this.setState(GameStateType.MatchingState)
    EventBus.publish(Events.FindMatcherEvent, { firstCellPosition, secondCellPosition })
  }

  public async handleMatchingContext(data: { firstCellPosition: CellPosition; secondCellPosition: CellPosition }) {
    console.log('Matching >>>>> Context()')
    if (data !== null && this.board.isCombo(data.firstCellPosition, data.secondCellPosition)) {
      await this.handleComboSkillContext(data.firstCellPosition, data.secondCellPosition)
    } else {
      // throw new Error('Test Waiting please')
      const command = new FindMatchesCommand(this.board, this.boardAdapter, data)
      try {
        const checkFindMatches = await this.boardAdapter.checkHasMatchesAdapter(this.board.getCells())
        if (checkFindMatches.getData()) {
          await this.commandManager.executeCommand(command)
        }
      } catch (error) {
        console.log('>>>> ERROR <<<<')
        console.log(error)
        this.setState(GameStateType.WaitingState)
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
  }

  public async handleClearingContext(arrMatch: CellPosition[]) {
    console.log('Clearing >>>>> Context()')

    const command = new ClearCommand(this.board, arrMatch)
    await this.commandManager.executeCommand(command)
    const result = await command.getResutl()

    await this.currentState.delay(300)
    this.setState(GameStateType.FallingState)
    EventBus.publish(Events.FallingEvent, result)
  }
  public async handleFallingContext(results: CellPosition[]) {
    console.log('Falling >>>>> Context()')
    const rows = 10
    // const results = await Promise.all(promises)
    await this.currentState.delay(300)
    // for (const item of results) {
    /* lọc các column đã có trong board không lưu thêm */
    const columns = Array.from(new Set(results.map((e) => e.col).sort((a, b) => a - b)))
    for (const col of columns) {
      const command = new FallingCommand(this.board, col, rows)
      await this.commandManager.executeCommand(command)
      const emptyRow = command.getResult()
      if (emptyRow != null) {
        await this.handleFillingContext({ emptyRow: emptyRow, col: col })
      }
      // }
    }

    if (this.board.getQueue().length > 0) {
      console.log('Falling QUEUE >>>>> Context()')
      await this.currentState.delay(300)
      // this.setState(GameStateType.ClearingState)
      // EventBus.publish(Events.ClearingEvent, this.board.getQueue())
      // this.board.setQueue([])
      await this.handleQueueContext()
    } else {
      await this.currentState.delay(300)
      this.setState(GameStateType.MatchingState)
      EventBus.publish(Events.FindMatcherEvent, null)
    }
  }

  async handleFillingContext(data: { emptyRow: number; col: number }) {
    console.log('Filling >>>>> Context()')
    const command = new FillingCommand(this.board, data.emptyRow, data.col)
    await this.commandManager.executeCommand(command)
    this.setState(GameStateType.WaitingState)
  }
  /* handleQueue context */
  async handleQueueContext() {
    const cellRemove = await this.board.handleRemoveQueue()
    if (cellRemove) {
      this.setState(GameStateType.FallingState)
      EventBus.publish(Events.FallingEvent, cellRemove)
    }
  }
  /* Handle Combo Skill */
  async handleComboSkillContext(first: CellPosition, second: CellPosition) {
    console.log('Combo Skill >>>>> Context()')
    const command = new ComboSkillCommand(this.board, first, second)
    await this.commandManager.executeCommand(command)
    if (command.getResult().length > 0) {
      await this.currentState.delay(300)
      this.setState(GameStateType.ClearingState)
      EventBus.publish(Events.ClearingEvent, command.getResult())
    }
  }
  // Getters
  public getBoardRender() {
    return this.boardRender
  }
  public getBoard() {
    return this.board
  }
  public getCommandManager() {
    return this.commandManager
  }
}
