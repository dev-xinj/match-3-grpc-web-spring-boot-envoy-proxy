import { SpecialCell } from '../../models/SpecialCell'

export interface ComboStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void
}
