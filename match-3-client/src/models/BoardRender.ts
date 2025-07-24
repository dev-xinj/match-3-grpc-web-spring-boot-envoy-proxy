import { config } from '../constants/config'
import { imageUIType } from '../constants/ItemUI'
import { TYPECELL } from '../enums/TypeCell'
import { Match, Pair } from '../types/Pair'
import { getRandomInt } from '../utils/common'
import { Board } from './Board'
import { Cell } from './Cell'
import Shape from './Shape'

export class BoardRenderer {
  board: Board
  ctx: CanvasRenderingContext2D
  queue: Pair[][]
  imgMgr: Shape
  cellSize: number = config.ATTRIBUTE.boxSize
  preKey: number | undefined
  constructor(board: Board, ctx: CanvasRenderingContext2D) {
    this.board = board
    this.ctx = ctx
    this.queue = []
    this.imgMgr = new Shape(imageUIType)
  }
  loadAll() {
    this.imgMgr.loadAll().then(() => {
      this.draw()
    })
  }
  click(primary: Pair, second: Pair | null) {
    const { row, column } = primary
    const { board } = this
    const cell = board.getCell(row, column)
    cell.attribute.colorFill = config.COLOR.selected
    this.fillCell({ row, column }, cell)
    if (second != null && (second.column !== column || second.row !== row)) {
      const cell = board.getCell(second.row, second.column)
      // if(second.column == column && second.row === row){

      // }
      cell.attribute.colorFill = config.COLOR.default
      this.fillCell({ row: second.row, column: second.column }, cell)
    }
    // this.drawImage(row, col, cell);
  }
  draw() {
    const { ctx, board } = this
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const rows: number = board.rows
    const columns: number = board.columns
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell = board.getCell(i, j)
        this.fillCell({ row: i, column: j }, cell)
        // this.drawImage(i, j, cell);
      }
    }
  }
  fillCell(pair: Pair, cell: Cell) {
    this.drawCell(pair, cell)
    this.drawImage(pair, cell)
  }
  drawCell(pair: Pair, cell: Cell) {
    const { row, column } = pair
    const { ctx } = this
    ctx.clearRect(column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
    ctx.fillStyle = config.COLOR.default
    ctx.fillRect(column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
    ctx.lineWidth = 3
    ctx.globalAlpha = 1.0
    ctx.strokeStyle = config.COLOR.border
    ctx.strokeRect(column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
  }
  drawImage(pair: Pair, cell: Cell) {
    const { row, column } = pair
    const { ctx, imgMgr } = this
    const img = imgMgr.get(cell.type, cell.index)
    ctx.drawImage(img, column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
  }
  ////////////////////////
  _getSwapAxisInfo(pairPick: number[][]) {
    const [first, second] = pairPick //cặp giá trị 2 ô chọn swap [[2,3],[2,4]]
    if (first[0] === second[0]) {
      //kiểm tra nếu row của ô 1 = row của ô 2 thì nó là hàng ngang
      return {
        axis: 'HORIZONTAL',
        numberAxis: first[0], //trục bắt đầu swap
        a: Math.min(first[1], second[1]), //min
        b: Math.max(first[1], second[1]) // max
        //max và min sẽ là điểm bắt đầu và điểm kết thúc để swap với effect
      }
    } else {
      return {
        axis: 'VERTICAL',
        numberAxis: first[1],
        a: Math.min(first[0], second[0]),
        b: Math.max(first[0], second[0])
      }
    }
  }
  /* ======================== */
  isAdjacent(primary: Pair, second: Pair) {
    const { board } = this
    return (
      // board.cells[primary.row][primary.column].type !== board.cells[second.row][second.column].type &&
      board.cells[primary.row][primary.column].index !== board.cells[second.row][second.column].index
    )
  }
  /* ===================== */
  _swapCells(pairPick: number[][]) {
    const [first, second] = pairPick
    const [row1, col1] = first
    const [row2, col2] = second
    const temp: Cell = this.board.cells[row1][col1]
    this.board.cells[row1][col1] = this.board.cells[row2][col2]
    this.board.cells[row2][col2] = temp
    this.fillCell({ row: row1, column: col1 }, this.board.cells[row1][col1])
    this.fillCell({ row: row2, column: col2 }, this.board.cells[row2][col2])
  }
  _drawCellAndImage(pair: Pair, cell: Cell) {
    this.fillCell(pair, cell)
  }
  _swapCellsAndRedraw(axis: string, numberAxis: number, a: number, b: number) {
    //numberAxis là trục chính, đại diện cho cột nếu Vertical, và dòng nếu horizontal
    if (axis === 'HORIZONTAL') {
      console.log(axis)
      this._swapCells([
        [numberAxis, a],
        [numberAxis, b]
      ])
      this._drawCellAndImage({ row: numberAxis, column: a }, this.board.cells[numberAxis][a])
      this._drawCellAndImage({ row: numberAxis, column: b }, this.board.cells[numberAxis][b])
    } else {
      console.log(axis)
      this._swapCells([
        [a, numberAxis],
        [b, numberAxis]
      ])
      this._drawCellAndImage({ row: a, column: numberAxis }, this.board.cells[a][numberAxis])
      this._drawCellAndImage({ row: b, column: numberAxis }, this.board.cells[b][numberAxis])
    }
  }

  /* ================== */

  swapEffect = (pairPick: number[][]) => {
    return new Promise<void>((resolve) => {
      if (!pairPick || pairPick.length < 2) return resolve()
      const { a, b, axis, numberAxis } = this._getSwapAxisInfo(pairPick)
      const speed: number = 0.09 //tốc độ
      let k = a,
        l = b
      // k và l sẽ là điểm tạm thời để nó bắt đầu tiến dần về giá trị còn lại

      const draw = () => {
        const isAnimated = k < b || l > a //kiểm tra nếu k chưa tiến về b (max) hoặc l chưa tiến về a (min)
        if (!isAnimated) {
          //nếu true tạo chuyển động swap
          this._swapCellsAndRedraw(axis, numberAxis, a, b)
          resolve()
          return
        }
        //tốc độ vẽ và xóa để tạo ra hiệu ứng chuyển động
        k += speed
        l -= speed
        this._drawSwapFrame(k, l, a, b, axis, numberAxis)
        requestAnimationFrame(draw)
      }

      draw()
    })
  }
  _getSwapImage = (x: number, y: number, entry: number, axis: string) => {
    /* 
            x, y: trục hiện tại khi đang chuyển động swap
            entry: vị vị trí ban đầu
        */
    const row = axis === 'HORIZONTAL' ? Math.floor(x) : Math.floor(entry)
    const col = axis === 'HORIZONTAL' ? Math.floor(entry) : Math.floor(y)
    const cell = this.board.cells[row][col]
    return this.imgMgr.get(cell.type, cell.index)
  }
  _drawSwapFrame(k: number, l: number, a: number, b: number, axis: string, numberAxis: number) {
    /*
     *   k, l: tọa độ mới
     *   a,b (min,max) : tọa độ ban đầu
     *   axis: trục
     *   numberAxis: vị trí tại trục tương ứng
     */
    if (axis === 'HORIZONTAL') {
      this.clearStyleCell({ row: numberAxis, column: a })
      this.clearStyleCell({ row: numberAxis, column: b })
      const srcImgPrimary = this._getSwapImage(numberAxis, k, a, axis)
      const srcImgSecond = this._getSwapImage(numberAxis, l, b, axis)
      this.ctx.drawImage(srcImgPrimary, k * this.cellSize, numberAxis * this.cellSize, this.cellSize, this.cellSize)
      this.ctx.drawImage(srcImgSecond, l * this.cellSize, numberAxis * this.cellSize, this.cellSize, this.cellSize)
    } else {
      this.clearStyleCell({ row: a, column: numberAxis })
      this.clearStyleCell({ row: b, column: numberAxis })
      const srcImgPrimary = this._getSwapImage(k, numberAxis, a, axis)
      const srcImgSecond = this._getSwapImage(l, numberAxis, b, axis)
      this.ctx.drawImage(srcImgPrimary, numberAxis * this.cellSize, k * this.cellSize, this.cellSize, this.cellSize)
      this.ctx.drawImage(srcImgSecond, numberAxis * this.cellSize, l * this.cellSize, this.cellSize, this.cellSize)
    }
  }
  clearStyleCell(pair: Pair) {
    const { row, column } = pair
    this.board.cells[row][column].attribute.colorFill = config.COLOR.default
    this.ctx.clearRect(column * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize)
  }

  /* =========== */
  #clearCellByIndex(x: number, y: number, cell: Cell) {
    if (cell.index != 0) {
      cell.attribute.colorFill = config.COLOR.default
      this.fillCell({ row: x, column: y }, cell)
    }
  }
  mapSpecialShapes(matches: Pair[], index: number) {
    const row = matches[0].row
    const col = matches[0].column
    this.board.cells[row][col].index = index
    if (index === 0) {
      this.board.cells[row][col].type = TYPECELL.DESTROY
    }
    this.board.cells[row][col].isNew = true
    this.board.cells[row][col].attribute.colorBorder = config.COLOR.border
    this.#clearCellByIndex(col, row, this.board.cells[row][col])
  }
  numberOfMatches(matches: Pair[]) {
    const length = matches.length
    return length >= 5 ? 2 : length > 3 && length < 5 ? 1 : length > 2 && length < 4 ? 0 : -1
  }
  defineNumberOfMatches(matches: Pair[]) {
    const length = matches.length
    return length >= 5 ? 5 : length > 3 && length < 5 ? 3 : -1
  }

  /* Match Resolve */

  async matchResolver(matches: Match[]) {
    const mapSkill: number[][][] = [
      [[1], [1], [0]],
      [[1], [2, 3], [2, 0]],
      [[0], [0, 3], [0, 0]]
    ]
    let newArr: Pair[] = []
    const promises = []
    for (const pair of matches) {
      // listMatches.forEach(element => {
      newArr = []
      if (pair.pairColumns.length > 0 && pair.pairRows.length > 0) {
        const mapIndex = mapSkill[this.numberOfMatches(pair.pairRows)][this.numberOfMatches(pair.pairColumns)]

        this.mapSpecialShapes(pair.pairRows, mapIndex[0])
        if (mapIndex.length >= 2) {
          this.mapSpecialShapes(pair.pairColumns, mapIndex[1])
        }
        newArr = pair.pairRows.concat(pair.pairColumns).slice()
        // newArr = new Set(...new Set(newArr.filter(e => JSON.stringify(e))));
        newArr = newArr.filter((e) => {
          return this.board.cells[e.row][e.column].isNew != true
        })
      } else {
        let mapIndex
        if (pair.pairColumns) {
          mapIndex = this.defineNumberOfMatches(pair.pairColumns)
          if (mapIndex != -1) {
            if (mapIndex === 5) {
              mapIndex = 0
            }
            this.mapSpecialShapes(pair.pairColumns, mapIndex)
          }
          newArr = pair.pairColumns.slice()
        } else if (pair.pairRows) {
          mapIndex = this.defineNumberOfMatches(pair.pairRows)
          if (mapIndex != -1) {
            if (mapIndex === 5) {
              mapIndex = 0
            } else {
              mapIndex = mapIndex - 1
            }
            this.mapSpecialShapes(pair.pairRows, mapIndex)
          }
          newArr = pair.pairRows.slice()
        }
      }

      promises.push(this.removeDiamon(newArr))
    }
    await Promise.all(promises).then(async (data) => {
      data.forEach((item) => {
        newArr = newArr.concat(item)
      })
      await new Promise((resolve) => setTimeout(resolve, 300))
      const sortArr = [
        ...new Set(
          newArr
            .flatMap((e) => e.column)
            .sort((a, b) => a - b)
            .flat()
        )
      ]
      sortArr.forEach((e) => {
        this.moveDown(e, 10 - 1)
      })
      await new Promise((resolve) => setTimeout(resolve, 500))
    })
    let newData = []
    while (this.queue.length) {
      newData = await this.removeDiamon(this.queue.shift() as Pair[])
      await new Promise((resolve) => setTimeout(resolve, 300))
      const sortArr = [
        ...new Set(
          newData
            .flatMap((e) => e.column)
            .sort((a, b) => a - b)
            .flat()
        )
      ]
      sortArr.forEach((e) => {
        this.moveDown(e, 10 - 1)
      })
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }
  /* Move Down */
  moveDown(col: number, len: number) {
    new Promise<void>((resolve) => {
      while (len >= 0) {
        if (this.board.cells[len][col].index != 0) {
          len--
          continue
        } else {
          for (let k = len; k >= 0; k--) {
            if (k == 0) {
              const num = getRandomInt(this.imgMgr.length() - 1)
              this.board.cells[k][col].index = num
              this.fillCell({ row: k, column: col }, this.board.cells[k][col])
            } else {
              const pre = { row: k, col: col }
              const pos = { row: k - 1, col: col }
              const index = this.queue.findIndex(
                (element) => JSON.stringify(element) === JSON.stringify([[pos.row, pos.col]])
              )
              if (index >= 0) {
                this.queue[index] = [{ row: pre.row, column: pre.col }]
              }
              this._swapCells([
                [pre.row, pre.col],
                [pos.row, pos.col]
              ])
            }
          }
          len = 10 - 1
        }
        // isLoop = true;
        this.#refeshVisitedItems()
        resolve()
      }
    })
  }
  /* Effect remove */

  fadeAndShrinkEffect(col: number, row: number, fadeSpeed: number, shrinkRate: number, originalSize: number) {
    return new Promise<void>((resolve) => {
      let fadeOpacity = 1.0
      let currentSize = originalSize
      const shrinkInterval = setInterval(() => {
        fadeOpacity -= fadeSpeed
        this.ctx.clearRect(col * originalSize, row * originalSize, originalSize, originalSize)
        const x = col * originalSize + (originalSize - currentSize) / 2
        const y = row * originalSize + (originalSize - currentSize) / 2
        this.ctx.globalAlpha = fadeOpacity
        this.ctx.fillRect(x, y, currentSize, currentSize)
        currentSize -= shrinkRate
        if (currentSize <= 0) {
          currentSize = 0
          clearInterval(shrinkInterval)
          resolve()
        }
      }, 50)
    })
  }
  /* remove Effect  */
  async removeDiamon(pairs: Pair[]): Promise<Pair[]> {
    if (pairs == null) {
      return []
    }
    const temp = pairs.slice()
    // const length: number = temp.length
    // if (length > 2) {
    const promises = []
    let listMatches: number[][] = []
    // this.resetTimer()
    // this.#score = this.#generateScore(length)
    // this.showScore(Score)
    for (let i = 0; i < temp.length; i++) {
      const row = temp[i].row
      const col = temp[i].column
      if (!this.board.cells[row][col].isNew) {
        if (this.board.cells[row][col].type != TYPECELL.NORMAL) {
          listMatches = listMatches.concat(this.#handleSigleSkill(row, col))
        }
        if (
          (this.board.cells[row][col].index != 0 || this.board.cells[row][col].type == TYPECELL.DESTROY) &&
          this.board.cells[row][col].isQueue == false
        ) {
          if (this.board.cells[row][col].index != 0 && this.board.cells[row][col].type != TYPECELL.DESTROY) {
            this.preKey = this.board.cells[row][col].index
          }
          // let newMatches = this.#handleSigleSkill(row, col, preKey);
          // this.queue.push([[row, col]]);
          // this.board.cells[row][col].isQueue = true;
          // continue
          // if (newMatches) {
          //     temp = temp.concat(newMatches);
          // }
        }

        const fadePromise = this.fadeAndShrinkEffect(col, row, 0.1, 5, 40)
        this.board.cells[row][col].index = 0
        this.board.cells[row][col].type = TYPECELL.NORMAL
        this.board.cells[row][col].attribute.colorFill = config.COLOR.default
        this.board.cells[row][col].isQueue = false
        this.#clearCellByIndex(col, row, this.board.cells[row][col])
        promises.push(fadePromise)
        // this.#clearDraw(col, row, this.board.cells[row][col]);
      } else {
        this.board.cells[row][col].isNew = false
      }
    }
    if (listMatches.length) {
      for (let i = 0; i < listMatches.length; i++) {
        const row = listMatches[i][0]
        const col = listMatches[i][1]
        if (!this.board.cells[row][col].isNew) {
          if (this.board.cells[row][col].type != TYPECELL.NORMAL) {
            if (this.board.cells[row][col].type != TYPECELL.DESTROY) {
              this.preKey = this.board.cells[row][col].index
            }
            this.queue.push([{ row: row, column: col }])
            // this.board.cells[row][col].isQueue = true;
            continue
          }

          const fadePromise = this.fadeAndShrinkEffect(col, row, 0.1, 5, 40)
          this.board.cells[row][col].index = 0
          this.board.cells[row][col].type = TYPECELL.NORMAL
          this.board.cells[row][col].attribute.colorFill = config.COLOR.default
          this.board.cells[row][col].isQueue = false
          this.#clearCellByIndex(col, row, this.board.cells[row][col])
          temp.push({ row: row, column: col })
          promises.push(fadePromise)
          // this.#clearDraw(col, row, this.board.cells[row][col]);
        } else {
          this.board.cells[row][col].isNew = false
        }
      }
    }
    await Promise.all(promises)
    // isLoop = true;
    // } else if (length == 2) {
    //     this.suggestes.push(matches);
    // }
    this.#refeshVisitedItems()
    return temp
  }
  #refeshVisitedItems() {
    this.board.cells.forEach((row) => {
      return row.forEach((cell) => {
        if (cell.isVisited) cell.isVisited = false
        if (cell.isNew) cell.isNew = false
      })
    })
  }
  /* Handle Skill */
  #dfsSkill(i: number, j: number, indexs: number[], limit: number): number[] {
    if (i < 0 || j < 0 || i >= limit || j >= limit) return indexs
    indexs.push(i, j)
    return this.#dfsSkill(i - 1, j + 1, indexs, limit)
  }
  #dfsSkillBoom(i: number, j: number, dx: number[], dy: number[], indexs: number[][]) {
    for (let k = 0; k < dx.length; k++) {
      const i1 = i + dx[k]
      const j1 = j + dy[k]
      if (i1 >= 0 && i1 < 10 && j1 >= 0 && j1 < 18) {
        indexs.push([i1, j1])
      }
    }
  }
  #clearByKey() {
    const matches: number[][] = []
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 18; j++) {
        if (this.board.cells[i][j].index == 3)
          //thay 3 thành index
          matches.push([i, j])
      }
    }
    return matches
  }
  #handleSigleSkill(row: number, col: number): number[][] {
    // let row = matches[0];
    // let col = matches[1];
    let matches: number[][] = []
    switch (this.board.cells[row][col].type) {
      case TYPECELL.VERTICAL: {
        console.log('Power vertical.')
        const colsIndex: number[] = this.#dfsSkill(row, row + 1, [], 10)
        if (colsIndex.length) {
          colsIndex.map((e) => matches.push([e, col]))
        }
        break
      }
      case TYPECELL.HORIZONTAL: {
        console.log('Power horizontal.')
        const rowsIndex = this.#dfsSkill(col, col + 1, [], 18)
        if (rowsIndex.length) {
          rowsIndex.map((e) => matches.push([row, e]))
        }
        break
      }
      case TYPECELL.BOOM: {
        const dx = [-1, 0, 1, 1, 1, 0, -1, -1]
        const dy = [-1, -1, -1, 0, 1, 1, 1, 0]
        this.#dfsSkillBoom(row, col, dx, dy, matches)
        break
      }
      case TYPECELL.DESTROY: {
        matches = this.#clearByKey()
        break
      }
    }
    if (matches.length) {
      return matches
    } else {
      return []
    }
  }
  /* #handleDoubleSkill(pair: Pair, type: TYPECELL, index: number) {
    const row = pair.row
    const col = pair.column
    let temp: number[][] = []
    // let matches = [];
    switch (type) {
      case TYPECELL.CROSS: {
        console.log('Power CROSS.')
        const arrCols: number[] = this.#dfsSkill(col, col - 1, [], 18)
        const arrRows: number[] = this.#dfsSkill(row, row - 1, [], 10)
        if (arrCols.length) {
          arrCols.map((e) => temp.push([row, e]))
        }
        if (arrRows.length) {
          arrRows.map((e) => temp.push([e, col]))
        }

        break
      }

      case TYPECELL.COMBO_BOOM: {
        console.log('COMBO_BOOM')
        const arrCols: number[] =this.#dfsSkill(col, col - 1, colsIndex, 18)
        const arrRows: number[] = this.#dfsSkill(row, row - 1, rowsIndex, 10)
        if (arrCols.length) {
          arrCols.map((e) => {
            temp.push([row, e])
            if (row + 1 < 10 && row + 1 >= 0) {
              temp.push([row + 1, e])
            }
            if (row - 1 < 10 && row - 1 >= 0) {
              temp.push([row - 1, e])
            }
          })
        }
        if (arrRows.length) {
          arrRows.map((e) => {
            temp.push([e, col])
            if (col + 1 < 18 && col + 1 >= 0) {
              temp.push([e, col + 1])
            }
            if (col - 1 < 18 && col - 1 >= 0) {
              temp.push([e, col - 1])
            }
          })
        }
        break
      }
      case TYPECELL.MEGA_BOOM: {
        //2 BOOM
        const dx = [-1, 0, 1, 1, 1, 0, -1, -1, -2, 0, 2, 2, 2, 0, -2, -2]
        const dy = [-1, -1, -1, 0, 1, 1, 1, 0, -2, -2, -2, 0, 2, 2, 2, 0]
        this.#dfsSkillBoom(row, col, dx, dy, temp)
        break
      }

      case TYPECELL.EXTRA_DESTROY: {
        //hori or verti + DESTROY
        temp = this.#clearByKey()
        temp.forEach((e) => {
          this.board.cells[e[0]][e[1]].index == index
        })
        break
      }

      case TYPECELL.MULTI_DESTROY: {
        //2 DESTROY
        break
      }

      case TYPECELL.ULTRA_DESTROY: {
        //DESTROY + BOOM
        temp = this.#clearByKey()
        temp.forEach((e) => {
          this.board.cells[e[0][1]].index == index
        })
        break
      }
    }
    if (temp.length) {
      return temp
    }
  } */
}
