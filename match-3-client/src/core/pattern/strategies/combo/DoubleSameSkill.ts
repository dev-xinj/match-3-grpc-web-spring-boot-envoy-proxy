import { SpecialCell } from '../../../models/SpecialCell'
import { ComboStrategy } from '../RuleStrategy'

export class DoubleSameSkill implements ComboStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('DoubleSame >>> active executed')
  }
}
