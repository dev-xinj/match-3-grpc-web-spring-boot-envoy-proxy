import { config } from '../../constants/config'
import { CellType } from '../main/CellType'

export abstract class BaseCell {
  // public position: CellPosition
  public abstract type: CellType
  public index: number
  public attribute: Attribute
  public isVisited: boolean
  public isNew: boolean
  public isQueue: boolean
  constructor(index: number, attribute: Attribute) {
    // this.position = position
    this.index = index
    this.attribute = attribute
    this.isVisited = false
    this.isNew = false
    this.isQueue = false
  }
  public resetAttribute() {
    this.attribute = new Attribute(config.COLOR.default, config.COLOR.border)
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
