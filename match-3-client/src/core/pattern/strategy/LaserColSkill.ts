import { CellPosition } from '../../models/CellPosition'
import { Main } from '../../models/Main'
import { SkillStrategy } from './SkillStrategy'

export class LaserColSkill implements SkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Laser Col >>> Skill executed')
    main.clearColumn(position)
  }
}
