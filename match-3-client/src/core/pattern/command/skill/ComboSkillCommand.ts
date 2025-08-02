import { SpecialCell } from '../../../models/SpecialCell'
import { ComboSkillManager } from '../../strategies/managers/ComboSkillManager'
import { Command } from '../Command'

export class ComboSkillCommand implements Command {
  private comboManager: ComboSkillManager
  private firstCell: SpecialCell
  private secondCell: SpecialCell
  constructor(comboManager: ComboSkillManager, firstCell: SpecialCell, secondCell: SpecialCell) {
    this.comboManager = comboManager
    this.firstCell = firstCell
    this.secondCell = secondCell
  }
  //Các hàm clone để lưu trạng thái ban đầu khi sử dụng skill
  execute(): Promise<void> {
    this.comboManager.handleCombo(this.firstCell, this.secondCell)
    return Promise.resolve()
  }
  undo(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
