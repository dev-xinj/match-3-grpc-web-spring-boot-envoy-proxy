import { MatchApi } from '../api/models/MatchApi'
import { Match } from '../types/Pair'

export function convert(matchesApi: MatchApi[]): Match[] {
  const matches: Match = {
    pairRows: [],
    pairColumns: []
  }
  matchesApi.forEach((e) => {
    if (e.pairColumns != null) {
      matches.pairColumns.push(e.pairColumns)
    }
    if (e.pairRows != null) {
      matches.pairRows.push(e.pairRows)
    }
  })
  const arr: Match[] = []
  arr[0] = matches
  return arr
}
