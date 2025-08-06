import { CellPosition } from '../main/CellPosition'
import { CellType } from '../main/CellType'
import { LaserColSkill } from '../pattern/strategies/single/LaserColSkill'
import { Attribute } from './BaseCell'
import { SpecialCell } from './SpecialCell'

export class LaserColCell extends SpecialCell {
  public type = CellType.LASER_COL
  constructor(index: number, position: CellPosition, attribute: Attribute) {
    super(index, attribute, position, new LaserColSkill())
  }
}
