import { SpecialCell } from '../../../models/SpecialCell'
import { ComboSkillStrategy } from '../ComboSkillStrategy'

export class SameWithLaserSkill implements ComboSkillStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('SameWithLaser >>> active executed')
  }
}
