import { CellPosition } from '../../main/CellPosition'
import { Main } from '../../main/Main'
import { BaseCell } from '../../models/BaseCell'

export interface BasicSkillStrategy {
  execute(position: CellPosition, main: Main, srcCell?: BaseCell): void
}
