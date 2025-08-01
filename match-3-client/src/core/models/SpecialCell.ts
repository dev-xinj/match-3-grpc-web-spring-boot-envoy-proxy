import { SkillStrategy } from '../pattern/strategy/SkillStrategy'
import { BaseCell } from './BaseCell'
import { CellPosition } from './CellPosition'
import { Main } from './Main'

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
