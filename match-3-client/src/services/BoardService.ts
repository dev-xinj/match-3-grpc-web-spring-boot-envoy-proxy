import * as instance from '../api/Api'
import { BoardApi } from '../api/models/BoardApi'
import { CellApi } from '../api/models/CellApi'
import { DataResponse } from '../api/models/DataResponse'
import { MatchApi } from '../api/models/MatchApi'
import { Pair } from '../types/Pair'

export const generateBoard = (row: number, col: number): Promise<BoardApi> => {
  const res: Promise<BoardApi> = instance.get('/generate-game', { rows: row, columns: col })
  return res
}
export const findMatchesService = (cells: CellApi[][]): Promise<MatchApi[]> => {
  const res: Promise<MatchApi[]> = instance.post('/find-matches', { cells })
  return res
}
export const findMatchesByIndexCellService = (
  cells: CellApi[][],
  firstPair: Pair,
  secondPair: Pair
): Promise<MatchApi[]> => {
  const res: Promise<MatchApi[]> = instance.post('/find-matches-swap', {
    cells: cells,
    firstPair: firstPair,
    secondPair: secondPair
  })
  return res
}
export const checkHasMatchesService = (cells: CellApi[][]): Promise<DataResponse> => {
  const res: Promise<DataResponse> = instance.post('/check-matches', { cells })
  return res
}
