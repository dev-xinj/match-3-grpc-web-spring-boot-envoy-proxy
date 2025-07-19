// import { config, source } from '../constants/config'
// import { baseTypes, SPECIAL, types } from '../constants/types'
import { config } from '../constants/config'
import { imageUIType } from '../constants/ItemUI'
import { TYPECELL } from '../enums/TypeCell'
import * as mock from '../example/MockCell'
import { Pair } from '../types/Pair'
import { getRandomInt } from '../utils/common'
import { Attribute, Cell } from './Cell'
export class Board {
  rows: number
  columns: number
  isMock?: boolean
  cells: Cell[][]
  constructor(rows: number, columns: number, isMock?: boolean) {
    this.rows = rows
    this.columns = columns
    // this.cells = Array.from({ length: rows }, () => Array.from({ length: columns }, () => this.#initFn()))
    this.cells = !isMock
      ? Array.from({ length: rows }, () => Array.from({ length: columns }, () => this.#initFn()))
      : mock.generateArrayCells()
  }
  #initFn() {
    return new Cell(
      getRandomInt(imageUIType.NORMAL.length - 1),
      TYPECELL.NORMAL,
      false,
      false,
      false,
      new Attribute(config.COLOR.default, config.COLOR.border)
    )
  }
  getCell(i: number, j: number) {
    return this.cells[i][j]
  }

  setCell(i: number, j: number, value: Cell) {
    this.cells[i][j] = value
  }

  swap(a: Pair, b: Pair) {
    const temp = this.cells[a.row][a.column]
    this.cells[a.row][a.column] = this.cells[b.row][b.column]
    this.cells[b.row][b.column] = temp
  }

  findMatchAt() {
    return false
  }
  refeshVisitedItems() {
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isVisited) cell.isVisited = false
        if (cell.isNew) cell.isNew = false
      })
    })
  }

  // defineSpecial(pair: Pair, colorBorder: string, match: number) {
  //   this.cells[pair.row][pair.column].index = match
  //   this.cells[pair.row][pair.column].type = match == SPECIAL ? types[baseTypes[4]] : types[baseTypes[match]]
  //   this.cells[pair.row][pair.column].isNew = true
  //   this.cells[pair.row][pair.column].attribute.colorBorder = colorBorder
  // }
}
