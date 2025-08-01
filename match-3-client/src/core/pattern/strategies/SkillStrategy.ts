import { CellPosition } from '../../main/CellPosition'
import { Main } from '../../main/Main'

export interface SkillStrategy {
  execute(position: CellPosition, main: Main): void
}
