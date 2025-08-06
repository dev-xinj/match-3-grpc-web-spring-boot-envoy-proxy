import { CellPosition } from '../core/main/CellPosition'

export type Pair = {
  row: number
  column: number
}
export type Match = {
  matcheRows: CellPosition[]
  matcheColumns: CellPosition[]
}
