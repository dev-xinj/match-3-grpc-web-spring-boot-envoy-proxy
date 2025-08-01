import { SkillStrategy } from '../pattern/strategies/SkillStrategy'
import { BaseCell } from './BaseCell'
import { CellPosition } from '../main/CellPosition'
import { Main } from '../main/Main'

export abstract class SpecialCell extends BaseCell {
  protected skill: SkillStrategy

  constructor(position: CellPosition, color: string, skill: SkillStrategy) {
    super(position, color)
    this.skill = skill
  }
  //activateSkill
  run(main: Main): void {
    this.skill.execute(this.position, main)
  }
}
