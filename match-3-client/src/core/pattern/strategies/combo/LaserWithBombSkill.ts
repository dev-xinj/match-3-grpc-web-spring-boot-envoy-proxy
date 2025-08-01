import { SpecialCell } from '../../../models/SpecialCell'
import { ComboStrategy } from '../RuleStrategy'

export class LaserWithBombSkill implements ComboStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('LaserWithBomb >>> active executed')
  }
}
