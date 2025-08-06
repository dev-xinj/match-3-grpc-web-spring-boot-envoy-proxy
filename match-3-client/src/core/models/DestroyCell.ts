import { CellPosition } from '../main/CellPosition'
import { CellType } from '../main/CellType'
import { DestroySkill } from '../pattern/strategies/single/DestroySkill'
import { Attribute } from './BaseCell'
import { SpecialCell } from './SpecialCell'

export class DestroyCell extends SpecialCell {
  public type = CellType.DESTROY
  constructor(index: number, position: CellPosition, attribute: Attribute) {
    super(index, attribute, position, new DestroySkill())
  }
}
