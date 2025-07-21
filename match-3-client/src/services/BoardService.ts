import * as instance from '../api/Api'
import { BoardApi } from '../api/models/BoardApi'
import { CellApi } from '../api/models/CellApi'
import { Match } from '../api/models/Match'

export const generateBoard = (row: number, col: number): Promise<BoardApi> => {
  const res: Promise<BoardApi> = instance.get('/generate-game', { rows: row, columns: col })
  return res
}
export const findMatches = (cells: CellApi[][]): Promise<Match[]> => {
  const res: Promise<Match[]> = instance.post('/find-matches', { cells })
  return res
}
