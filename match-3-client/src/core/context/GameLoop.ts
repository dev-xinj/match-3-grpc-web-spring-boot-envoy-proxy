import { Match } from '../../types/Pair'
import { EventBus } from '../pattern/EventBus'
import { GameContext } from './GameContext'

export class GameLoop {
  private context: GameContext
  private lastTime: number = 0
  constructor() {
    this.context = new GameContext()
    EventBus.subscribe('matchEvent', this.handleMatch.bind(this))
  }
  public run(currentTime: number) {
    if (this.lastTime === 0) {
      this.lastTime = currentTime
    }
    const deltaTime = (currentTime - this.lastTime) / 1000
    this.lastTime = currentTime
    this.context.update(deltaTime)
    requestAnimationFrame(this.run.bind(this))
  }
  private handleMatch(matches: Match[]) {
    EventBus.publish('scoreUpdate', this.calculateScore(matches))
  }
  private calculateScore(matches: Match[]) {
    return matches.reduce((score, match) => score + match.pairColumns.length + match.pairRows.length, 0)
  }
}
