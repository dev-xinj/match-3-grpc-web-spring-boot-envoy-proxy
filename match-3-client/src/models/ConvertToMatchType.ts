import { CellApi } from '../api/models/CellApi'
import { MatchApi } from '../api/models/MatchApi'
import { Match } from '../types/Pair'
import { Cell } from './Cell'

export function convert(matchesApi: MatchApi[]): Match[] {
  const arrMatches: Match[] = matchesApi.map((e) => {
    const match: Match = {
      pairRows: [],
      pairColumns: []
    }
    if (e.pairColumns != null) {
      match.pairColumns.push(...e.pairColumns)
      // match.pairColumns.map((e) => {
      //   return { row: e.row, column: e.column }
      // })
    }
    if (e.pairRows != null) {
      match.pairRows.push(...e.pairRows)
      // match.pairRows.map((e) => {
      //   return { row: e.row, column: e.column }
      // })
    }
    return match
  })
  return arrMatches
}
export function convertToCellsAPI(cells: Cell[][]): CellApi[][] {
  return cells.map((e) => {
    return e.map((i) => {
      return new CellApi(i.type, i.index, i.isVisited, i.isNew, i.isQueue)
    })
  })
}
