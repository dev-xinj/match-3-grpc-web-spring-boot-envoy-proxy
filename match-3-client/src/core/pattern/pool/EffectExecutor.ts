import { TYPECELL } from '../../../enums/TypeCell'
import { CellPosition } from '../../main/CellPosition'
import { CellType } from '../../main/CellType'

export type EffectExecutor = {
  active: boolean
  type: CellType

  play: (firstPosCell: CellPosition, secondPosCell?: CellPosition) => Promise<void>
  reset: () => void
}
