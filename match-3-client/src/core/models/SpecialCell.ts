import { CellPosition } from '../main/CellPosition'
import { Main } from '../main/Main'
import { BasicSkillStrategy } from '../pattern/strategies/BasicSkillStrategy'
import { BaseCell } from './BaseCell'

export abstract class SpecialCell extends BaseCell {
  protected skill: BasicSkillStrategy

  constructor(position: CellPosition, color: string, skill: BasicSkillStrategy) {
    super(position, color)
    this.skill = skill
  }
  //activateSkill
  run(main: Main): void {
    this.skill.execute(this.position, main)
  }
}
