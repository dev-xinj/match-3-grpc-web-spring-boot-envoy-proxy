import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { SkillStrategy } from '../SkillStrategy'

export class SameSkill implements SkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Same >>> Skill executed')
    main.clearAllCellsOfSameType(position)
  }
}
