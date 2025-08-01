import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { SkillStrategy } from '../SkillStrategy'

export class LaserColSkill implements SkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Laser Col >>> Skill executed')
    main.clearColumn(position)
  }
}
