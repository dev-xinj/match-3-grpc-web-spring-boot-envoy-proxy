import { SpecialCell } from '../../../models/SpecialCell'
import { ComboStrategy } from '../RuleStrategy'

export class SameWithBombSkill implements ComboStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('SameWithBomb >>> active executed')
  }
}
