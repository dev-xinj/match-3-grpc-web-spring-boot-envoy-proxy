import { CellPosition } from '../../models/CellPosition'
import { Main } from '../../models/Main'
import { SkillStrategy } from './SkillStrategy'

export class LaserRowSkill implements SkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Laser >>> Skill executed')
    main.clearRow(position)
  }
}
