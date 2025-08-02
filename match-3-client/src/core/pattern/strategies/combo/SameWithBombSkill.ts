import { SpecialCell } from '../../../models/SpecialCell'
import { ComboSkillStrategy } from '../ComboSkillStrategy'

export class SameWithBombSkill implements ComboSkillStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('SameWithBomb >>> active executed')
  }
}
