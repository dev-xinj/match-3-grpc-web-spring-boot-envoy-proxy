import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { BasicSkillStrategy } from '../BasicSkillStrategy'

//Kỹ năng một phạm vi
export class BombSkill implements BasicSkillStrategy {
  execute(position: CellPosition, main: Main): void {
    console.log('Bomb >>> Skill executed')
    main.explodeArea(position, 1) //bán kính một ô
  }
}
