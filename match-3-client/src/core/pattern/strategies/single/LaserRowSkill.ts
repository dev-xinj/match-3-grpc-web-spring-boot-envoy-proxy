import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { BasicSkillStrategy } from '../BasicSkillStrategy'

export class LaserRowSkill implements BasicSkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Laser >>> Skill executed')
    main.clearRow(position)
  }
}
