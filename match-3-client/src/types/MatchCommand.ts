import { Pair } from './Pair'

export type MatchCommand = {
  arrPair: Pair[]
  promises: Promise<Pair[]>[]
}
