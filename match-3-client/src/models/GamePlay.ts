import { MatchApi } from '../api/models/MatchApi'
import { config } from '../constants/config'
import { Pair } from '../types/Pair'
import { BoardRenderer } from './BoardRender'
import { convert } from './ConvertToMatchType'
export class GamePlay {
  boardRender: BoardRenderer
  firstPick: Pair | null = null
  listMatches: [][] = []
  constructor(boardRender: BoardRenderer) {
    this.boardRender = boardRender
  }

  async play() {
    this.boardRender.loadAll()
    // while (fa) {

    // }
  }

  handlePick(x: number, y: number) {
    const { boardRender } = this
    const column = Math.floor(x / config.ATTRIBUTE.boxSize)
    const row = Math.floor(y / config.ATTRIBUTE.boxSize)
    const pick: Pair = { row, column }
    if (!this.firstPick) {
      this.firstPick = pick
      boardRender?.click(this.firstPick, null)
      return 'SELECTED'
    }
    if (this.#isAdjacent(this.firstPick, pick)) {
      this.boardRender.effectManager.swapEffect(
        this.firstPick,
        pick,
        40,
        300,
        (row, col, x, y) => {
          this.boardRender.drawAnimation(row, col, x, y)
          // ctx.fillStyle = config.COLOR.default
          // ctx.fillRect(x, y, 40, 40)
          // ctx.lineWidth = 3
          // ctx.globalAlpha = 1.0
          // ctx.strokeStyle = config.COLOR.border
          // const cell = this.boardRender.board.cells[row][col]
          // ctx.strokeRect(x, y, 40, 40)
          // const img = this.boardRender.imgMgr.get(cell.type, cell.index)

          // ctx.drawImage(img, x, y, 40, 40)
        },
        () => {
          this.firstPick = null
          console.log('Swap xong')
        }
      )

      //Kiểm tra có phải 2 ô hợp lệ không
      // this.#swapEffect(this.firstPick, pick).then(async () => {
      //   const data = await boardRender.board.findMatchAt()

      //   const matchesApi: MatchApi[] = data.map((e) => Object.setPrototypeOf(e, MatchApi.prototype))
      //   // const matchesApi: MatchApi[] = Object.setPrototypeOf(await boardRender.board.findMatchAt(), MatchApi.prototype)
      //   console.log('match: ', matchesApi)
      //   if (matchesApi.length) {
      //     this.boardRender.matchResolver(convert(matchesApi))
      //     this.firstPick = null
      //   } else {
      //     this.#swapEffect(this.firstPick, pick).then(() => {
      //       this.firstPick = null
      //       return 'NOT_MATCH'
      //     })
      //   }
      // })
    } else {
      boardRender?.click(pick, this.firstPick)
      this.firstPick = pick
      return 'SECONDPICK'
    }
  }

  #isAdjacent(primary: Pair, second: Pair) {
    return (
      Math.abs(primary.row - second.row) + Math.abs(primary.column - second.column) === 1 &&
      this.boardRender.isAdjacent(primary, second)
    )
  }

  // #swap(primary: Pair, second: Pair) {
  //   this.boardRender.board.swap(primary, second)
  // }
  async #swapEffect(primary: Pair | null, second: Pair) {
    if (primary != null) {
      const matches: number[][] = [
        [primary.row, primary.column],
        [second.row, second.column]
      ]
      await this.boardRender.swapEffect(matches)
    }
  }
}
