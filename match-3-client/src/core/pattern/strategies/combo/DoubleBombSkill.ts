import { SpecialCell } from '../../../models/SpecialCell'
import { ComboSkillStrategy } from '../ComboSkillStrategy'

export class DoubleBombSkill implements ComboSkillStrategy {
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('DoubleBomb >>> active executed')
  }
}
