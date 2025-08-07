import { CellPosition } from '../../main/CellPosition'
import { ComboType } from '../../main/ComboType'
import { SpecialCell } from '../../models/SpecialCell'

export interface ComboSkillStrategy {
  execute(
    firstCell: SpecialCell,
    secondCell: SpecialCell,
    comboType: ComboType,
    callback: (firstCell: SpecialCell, secondCell: SpecialCell, comboType: ComboType) => CellPosition[]
  ): CellPosition[]
}
