import { CellPosition } from '../../../main/CellPosition'
import { ComboType } from '../../../main/ComboType'
import { SpecialCell } from '../../../models/SpecialCell'
import { ComboSkillStrategy } from '../ComboSkillStrategy'

export class DoubleBombSkill implements ComboSkillStrategy {
  execute(
    firstCell: SpecialCell,
    secondCell: SpecialCell,
    comboType: ComboType,
    callback: (firstCell: SpecialCell, secondCell: SpecialCell, comboType: ComboType) => CellPosition[]
  ): CellPosition[] {
    console.log('DoubleBomb >>> active executed')
    return callback(firstCell, secondCell, comboType)
  }
}
