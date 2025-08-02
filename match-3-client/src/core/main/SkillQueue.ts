import { BaseCell } from '../models/BaseCell'
import { BasicSkillStrategy } from '../pattern/strategies/BasicSkillStrategy'
import { CellPosition } from './CellPosition'
import { Main } from './Main'

type QueueDefine = {
  skill: BasicSkillStrategy
  position: CellPosition
  srcCell?: BaseCell
  main: Main
}
export class SkillQueue {
  private queue: QueueDefine[] = []
  private isProcessing: boolean = false

  addSkill(skill: BasicSkillStrategy, position: CellPosition, srcCell?: BaseCell, main: Main): void {
    this.queue.push({ skill, position, srcCell, main })
    if (!this.isProcessing) {
      this.processQueue()
    }
  }
  private async processQueue() {
    if (this.queue.length === 0) {
      this.isProcessing = false
      return
    }
    this.isProcessing = true
    const queueDefine = this.queue.shift()!
    await this.executeQueue(queueDefine)
    this.processQueue()
  }
  private async executeQueue(queueDefine: QueueDefine) {
    const skill = queueDefine.skill
    skill.execute(queueDefine.position, queueDefine.main, queueDefine.srcCell)
  }
}
