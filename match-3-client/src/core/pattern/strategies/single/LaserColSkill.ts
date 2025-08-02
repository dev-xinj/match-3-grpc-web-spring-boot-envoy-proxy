import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { BasicSkillStrategy } from '../BasicSkillStrategy'

export class LaserColSkill implements BasicSkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Laser Col >>> Skill executed')
    main.clearColumn(position)
  }
}
