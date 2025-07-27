import { EventBus } from '../../pattern/EventBus'
import { GameState } from '../GameState'
import { FillingState } from './FillingState'
const FALL_DURATION = 3
export class FallingState extends GameState {
  private fallTimer: number = 0
  private fallingComplete: boolean = false
  public enter(): void {
    console.log('Entering FallingState')
    // this.context?.getBoardRender()
    this.fallingComplete = false
  }
  public update(deltaTime: number): void {
    this.fallTimer += deltaTime
    if (this.fallTimer >= FALL_DURATION) {
      this.fallingComplete = true
      this.context.setState(new FillingState())
    }
  }
  public exit(): void {
    if (this.fallingComplete) {
      EventBus.publish('FallingEvent')
    }
  }
}
