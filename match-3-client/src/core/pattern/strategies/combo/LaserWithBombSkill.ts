import { SpecialCell } from '../../../models/SpecialCell'
import { ComboSkillStrategy } from '../ComboSkillStrategy'

export class LaserWithBombSkill implements ComboSkillStrategy{
  execute(firstCell: SpecialCell, secondCell: SpecialCell): void {
    console.log('LaserWithBomb >>> active executed')
  }
}
