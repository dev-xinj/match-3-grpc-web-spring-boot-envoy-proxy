import { CellType } from '../main/CellType'
import { CellPosition } from '../main/CellPosition'

export abstract class BaseCell {
  public position: CellPosition
  public abstract type: CellType
  public index: number
  public attribute: Attribute
  constructor(position: CellPosition, index: number, attribute: Attribute) {
    this.position = position
    this.index = index
    this.attribute = attribute
  }
}
export class Attribute {
  colorFill: string
  colorBorder: string

  constructor(colorFill: string, colorBorder: string) {
    this.colorFill = colorFill
    this.colorBorder = colorBorder
  }
}
