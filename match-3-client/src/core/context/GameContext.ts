import { Board } from '../../models/Board'
import { BoardRenderer } from '../../models/BoardRender'
import { Pair } from '../../types/Pair'
import { MatchingState } from '../base/extend/MatchingState'
import { WaitingState } from '../base/extend/WaitingState'
import { GameState } from '../base/GameState'
import { CommandManager } from '../pattern/CommandManaget'
import { EventBus } from '../pattern/EventBus'
import { SwapCommand } from '../pattern/SwapCommand'

export class GameContext {
  private currentState: GameState
  private boardRender: BoardRenderer
  private commandManager: CommandManager
  private accumulator: number
  private lastTime: number = 0
  private animationFrameId: number | null = null
  private render: () => void
  private ctx: CanvasRenderingContext2D
  private FIXED_TIMESTEP: number = 1 / 60 //60FPS
  constructor(boardRender: BoardRenderer, render: () => void, ctx: CanvasRenderingContext2D) {
    this.boardRender = boardRender
    this.render = render
    this.ctx = ctx
    this.commandManager = new CommandManager()
    this.setState(new WaitingState())
    EventBus.subscribe('SwapEvent', this.handleSwap.bind(this))
  }
  public update(deltaTime: number) {
    this.accumulator += deltaTime
    while (this.accumulator >= this.FIXED_TIMESTEP) {
      this.currentState.update(this.FIXED_TIMESTEP)
      this.accumulator -= this.FIXED_TIMESTEP
    }
  }
  public start() {
    if (this.animationFrameId === null) {
      this.lastTime = performance.now()
      const loop = (currentTime: number) => {
        const deltaTime = (currentTime - this.lastTime) / 1000
        this.lastTime = currentTime

        this.accumulator += deltaTime
        const FIXED_TIMESTEP = 1 / 60 // 60 FPS cho logic game

        while (this.accumulator >= FIXED_TIMESTEP) {
          this.update(FIXED_TIMESTEP)
          this.accumulator -= FIXED_TIMESTEP
        }

        // VẼ RA MÀN HÌNH Ở ĐÂY
        // Mỗi frame, chúng ta lấy board hiện tại và vẽ nó
        this.render()

        this.animationFrameId = requestAnimationFrame(loop)
      }
      this.animationFrameId = requestAnimationFrame(loop)
    }
  }
  public setState(newState: GameState) {
    if (this.currentState) {
      this.currentState.exit()
    }
    this.currentState = newState
    this.currentState.setContext(this)
    this.currentState.enter()
  }
  public handleSwap(positions: unknown) {
    const [firstPick, secondPick] = positions as [Pair, Pair]
    console.log('............')
    const command = new SwapCommand(this.boardRender, firstPick, secondPick)
    this.commandManager.executeCommand(command)
    this.setState(new MatchingState())
  }
  public stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = null
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
