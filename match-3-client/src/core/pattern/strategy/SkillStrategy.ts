import { CellPosition } from '../../models/CellPosition'
import { Main } from '../../models/Main'

export interface SkillStrategy {
  execute(position: CellPosition, main: Main): void
}
