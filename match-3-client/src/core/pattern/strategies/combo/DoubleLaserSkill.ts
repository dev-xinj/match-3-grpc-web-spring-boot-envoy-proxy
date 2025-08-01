import { exec } from 'child_process'
import { SpecialCell } from '../../../models/SpecialCell'
import { ComboStrategy } from '../RuleStrategy'

export class DoubleLaserSkill implements ComboStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('DoubleLaser >>> active executed')
  }
}
