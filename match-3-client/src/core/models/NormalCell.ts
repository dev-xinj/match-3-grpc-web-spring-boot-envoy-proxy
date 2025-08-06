import { CellType } from '../main/CellType'
import { Attribute, BaseCell } from './BaseCell'

export class NormalCell extends BaseCell {
  public type = CellType.NORMAL
  constructor(index: number, attribute: Attribute) {
    super(index, attribute)
  }
}
