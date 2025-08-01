import { SpecialCell } from '../../../models/SpecialCell'
import { ComboStrategy } from '../RuleStrategy'

export class SameWithLaserSkill implements ComboStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('SameWithLaser >>> active executed')
  }
}
