import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { SkillStrategy } from '../SkillStrategy'

export class LaserRowSkill implements SkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Laser >>> Skill executed')
    main.clearRow(position)
  }
}
