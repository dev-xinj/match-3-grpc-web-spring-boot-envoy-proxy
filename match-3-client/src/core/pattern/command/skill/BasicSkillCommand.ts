import { Main } from '../../../main/Main'
import { SpecialCell } from '../../../models/SpecialCell'
import { Command } from '../Command'

export class BasicSkillCommand implements Command {
  private specialCell: SpecialCell
  private main: Main
  constructor(specialCell: SpecialCell, main: Main) {
    this.specialCell = specialCell
    this.main = main
  }
  execute(): Promise<void> {
    this.specialCell.run(this.main)
    return Promise.resolve()
  }
  undo(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
