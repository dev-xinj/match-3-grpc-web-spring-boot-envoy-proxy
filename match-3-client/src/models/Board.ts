// import { config, source } from '../constants/config'
// import { baseTypes, SPECIAL, types } from '../constants/types'
import { BoardApi } from '../api/models/BoardApi'
import { CellApi } from '../api/models/CellApi'
import { config } from '../constants/config'
import * as mock from '../example/MockCell'
import { findMatchesService } from '../services/BoardService'
import { Pair } from '../types/Pair'
import { Cell } from './Cell'
export class Board {
  rows: number
  columns: number
  isMock?: boolean
  cells: Cell[][]
  constructor(rows: number, columns: number, cells: Cell[][], isMock?: boolean) {
    this.rows = rows
    this.columns = columns
    this.cells = !isMock ? cells : mock.generateArrayCells()
  }
  // #initFn() {
  //   return new Cell(
  //     getRandomInt(imageUIType.NORMAL.length - 1),
  //     TYPECELL.NORMAL,
  //     false,
  //     false,
  //     false,
  //     new Attribute(config.COLOR.default, config.COLOR.border)
  //   )
  // }
  // #build(rows: number, columns: number) {
  //   return Array.from({ length: rows }, () => Array.from({ length: columns }, () => this.#initFn()))
  // }
  getCell(i: number, j: number) {
    return this.cells[i][j]
  }
  formData(fetchData: BoardApi[][] | null) {
    if (fetchData == null) {
      return
    }
  }
  setCell(i: number, j: number, value: Cell) {
    this.cells[i][j] = value
  }

  swap(a: Pair, b: Pair) {
    const temp = this.cells[a.row][a.column]
    this.cells[a.row][a.column] = this.cells[b.row][b.column]
    this.cells[b.row][b.column] = temp
    this.cells[b.row][b.column].attribute.colorBorder = config.COLOR.border
    this.cells[b.row][b.column].attribute.colorFill = config.COLOR.default
    this.cells[a.row][a.column].attribute.colorFill = config.COLOR.default
    this.cells[a.row][a.column].attribute.colorBorder = config.COLOR.border
  }

  findMatchAt() {
    const find = async () => {
      return await findMatchesService(this.convertToCellsAPI())
    }
    return find()
  }

  convertToCellsAPI(): CellApi[][] {
    return this.cells.map((e) => {
      return e.map((i) => {
        return new CellApi(i.type, i.index, i.isVisited, i.isNew, i.isQueue)
      })
    })
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
