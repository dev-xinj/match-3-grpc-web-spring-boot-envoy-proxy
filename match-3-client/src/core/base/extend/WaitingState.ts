import { EventBus } from '../../pattern/EventBus'
import { GameState } from '../GameState'

export class WaitingState extends GameState {
  public enter(): void {
    console.log('Enter WaitingState')
    EventBus.publish('inputEvent', true)
  }
  public update(deltaTime: number): void {
    throw new Error('Method not implemented.')
  }
  public exit(): void {
    // throw new Error('Method not implemented.')
  }
}
