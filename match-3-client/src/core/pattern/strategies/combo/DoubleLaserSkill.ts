import { SpecialCell } from '../../../models/SpecialCell'
import { ComboSkillStrategy } from '../ComboSkillStrategy'

export class DoubleLaserSkill implements ComboSkillStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('DoubleLaser >>> active executed')
  }
}
