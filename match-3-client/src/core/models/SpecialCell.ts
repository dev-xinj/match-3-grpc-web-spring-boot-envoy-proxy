import { CellPosition } from '../main/CellPosition'
import { Main } from '../main/Main'
import { BasicSkillStrategy } from '../pattern/strategies/BasicSkillStrategy'
import { Attribute, BaseCell } from './BaseCell'
import { NormalCell } from './NormalCell'

export abstract class SpecialCell extends BaseCell {
  protected skill: BasicSkillStrategy
  protected position: CellPosition
  constructor(index: number, attribute: Attribute, position: CellPosition, skill: BasicSkillStrategy) {
    super(index, attribute)
    this.skill = skill
    this.position = position
    this.isNew = true
  }
  /* Khởi tạo lại Position */
  public resetPosition(newPosition: CellPosition) {
    this.position = newPosition
  }
  /* Reset Normal Cell */
  public resetNormalCell(): NormalCell {
    return new NormalCell(this.index, this.attribute)
  }

  public getPosition() {
    return this.position
  }
  //activateSkill
  public run(position: CellPosition, main: Main): void {
    this.skill.execute(position, main)
  }
}
