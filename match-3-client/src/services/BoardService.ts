import * as instance from '../api/Api'
import { BoardApi } from '../api/models/BoardApi'
import { CellApi } from '../api/models/CellApi'
import { MatchApi } from '../api/models/MatchApi'

export const generateBoard = (row: number, col: number): Promise<BoardApi> => {
  const res: Promise<BoardApi> = instance.get('/generate-game', { rows: row, columns: col })
  return res
}
export const findMatches = (cells: CellApi[][]): Promise<MatchApi[]> => {
  const res: Promise<MatchApi[]> = instance.post('/find-matches', { cells })
  return res
}
