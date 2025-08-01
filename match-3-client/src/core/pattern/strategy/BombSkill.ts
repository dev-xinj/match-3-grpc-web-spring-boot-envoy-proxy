import { CellPosition } from '../../models/CellPosition'
import { Main } from '../../models/Main'
import { SkillStrategy } from './SkillStrategy'

//Kỹ năng một phạm vi
export class BombSkill implements SkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Bomb >>> Skill executed')
    main.explodeArea(position, 1) //bán kính một ô
  }
}
