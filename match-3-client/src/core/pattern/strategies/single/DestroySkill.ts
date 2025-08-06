import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { BaseCell } from '../../../models/BaseCell'
import { BasicSkillStrategy } from '../BasicSkillStrategy'

export class DestroySkill implements BasicSkillStrategy {
  execute(position: CellPosition, main: Main, srcCell: BaseCell): void {
    console.log('DESTROY >>> Skill executed')
    main.clearAllCellsOfDestroyType(position, srcCell)
  }
}
