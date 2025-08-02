import { SpecialCell } from '../../models/SpecialCell'

export interface ComboSkillStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void
}
