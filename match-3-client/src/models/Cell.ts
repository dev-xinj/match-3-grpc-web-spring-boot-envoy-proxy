import { TYPECELL } from '../enums/TypeCell'

export class Cell {
  index: number
  type: TYPECELL
  isVisited: boolean
  isNew: boolean
  isQueue: boolean
  attribute: Attribute

  constructor(
    index: number,
    type: TYPECELL,
    isVisited: boolean,
    isNew: boolean,
    isQueue: boolean,
    attribute: Attribute
  ) {
    this.index = index
    this.isVisited = isVisited
    this.isNew = isNew
    this.type = type
    this.isQueue = isQueue
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
