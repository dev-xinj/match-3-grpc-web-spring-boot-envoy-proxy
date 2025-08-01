import { CellPosition } from '../../models/CellPosition'
import { Main } from '../../models/Main'
import { SkillStrategy } from './SkillStrategy'

export class SameSkill implements SkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Same >>> Skill executed')
    main.clearAllCellsOfSameType(position)
  }
}
