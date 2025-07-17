import { config, source } from "../constants/config"
import { types } from "../constants/types"
import { getRandomInt } from "../utils/common"
import Shape from "./Shape"

const BOX_SIZE = config.ATTRIBUTE.boxSize
export class BoardRenderer {
    constructor(board, ctx, matrixService) {
        this.board = board
        this.ctx = ctx
        this.matrixService = matrixService
        this.cellSize = BOX_SIZE
        this.queue = []
    }
    isAdjacent(primary, second) {
        const { board } = this
        return board.cells[primary.row][primary.col].key !== board.cells[second.row][second.col].key
    }
    _getSwapAxisInfo(pairPick) {
        const [first, second] = pairPick; //cặp giá trị 2 ô chọn swap [[2,3],[2,4]]
        if (first[0] === second[0]) { //kiểm tra nếu row của ô 1 = row của ô 2 thì nó là hàng ngang
            return {
                axis: 'HORIZONTAL',
                numberAxis: first[0], //trục bắt đầu swap
                a: Math.min(first[1], second[1]), //min
                b: Math.max(first[1], second[1])    // max
                //max và min sẽ là điểm bắt đầu và điểm kết thúc để swap với effect
            };
        } else {
            return {
                axis: 'VERTICAL',
                numberAxis: first[1],
                a: Math.min(first[0], second[0]),
                b: Math.max(first[0], second[0])
            };
        }
    }

    _swapCells(pairPick) {
        const [first, second] = pairPick;
        const [row1, col1] = first;
        const [row2, col2] = second;
        let temp = this.board.cells[row1][col1];
        this.board.cells[row1][col1] = this.board.cells[row2][col2];
        this.board.cells[row2][col2] = temp;
    }
    _drawCellAndImage(row, col, cell) {
        this.drawCell(row, col, cell);
        this.drawImage(row, col, cell);
    }
    _swapCellsAndRedraw(axis, numberAxis, a, b) {
        //numberAxis là trục chính, đại diện cho cột nếu Vertical, và dòng nếu horizontal
        if (axis === 'HORIZONTAL') {
            console.log(axis)
            this._swapCells([[numberAxis, a], [numberAxis, b]]);
            this._drawCellAndImage(numberAxis, a, this.board.cells[numberAxis][a]);
            this._drawCellAndImage(numberAxis, b, this.board.cells[numberAxis][b]);
        } else {
            console.log(axis)
            this._swapCells([[a, numberAxis], [b, numberAxis]]);
            this._drawCellAndImage(a, numberAxis, this.board.cells[a][numberAxis]);
            this._drawCellAndImage(b, numberAxis, this.board.cells[b][numberAxis]);
        }
    }
    clearStyleCell(row, col) {
        this.board.cells[row][col].attribute.color = config.COLOR.default
        this.ctx.clearRect(col * BOX_SIZE, row * BOX_SIZE, BOX_SIZE, BOX_SIZE);
    }
    _getSwapImage = (x, y, entry, axis) => {
        /* 
            x, y: trục hiện tại khi đang chuyển động swap
            entry: vị vị trí ban đầu
        */
        let row = axis === 'HORIZONTAL' ? Math.floor(x) : Math.floor(entry);
        let col = axis === 'HORIZONTAL' ? Math.floor(entry) : Math.floor(y);
        let cell = this.board.cells[row][col];
        return this.imgMgr.get(cell.key, cell.index);
    }
    swapEffect = (pairPick) => {
        return new Promise((resolve) => {
            if (!pairPick || pairPick.length < 2) return resolve();
            const { a, b, axis, numberAxis } = this._getSwapAxisInfo(pairPick);
            let speed = 0.09; //tốc độ
            let k = a, l = b;
            // k và l sẽ là điểm tạm thời để nó bắt đầu tiến dần về giá trị còn lại

            let draw = () => {
                const isAnimated = k < b || l > a; //kiểm tra nếu k chưa tiến về b (max) hoặc l chưa tiến về a (min)
                if (!isAnimated) { //nếu true tạo chuyển động swap
                    this._swapCellsAndRedraw(axis, numberAxis, a, b);
                    resolve();
                    return;
                }
                //tốc độ vẽ và xóa để tạo ra hiệu ứng chuyển động
                k += speed;
                l -= speed;
                this._drawSwapFrame(k, l, a, b, axis, numberAxis);
                requestAnimationFrame(draw);
            };

            draw();
        })

    }

    _drawSwapFrame(k, l, a, b, axis, numberAxis) {
        /* 
         *   k, l: tọa độ mới
         *   a,b (min,max) : tọa độ ban đầu
         *   axis: trục
         *   numberAxis: vị trí tại trục tương ứng
        */
        if (axis === 'HORIZONTAL') {
            this.clearStyleCell(numberAxis, a)
            this.clearStyleCell(numberAxis, b)
            let srcImgPrimary = this._getSwapImage(numberAxis, k, a, axis)
            let srcImgSecond = this._getSwapImage(numberAxis, l, b, axis)
            this.ctx.drawImage(srcImgPrimary, k * BOX_SIZE, numberAxis * BOX_SIZE, BOX_SIZE, BOX_SIZE);
            this.ctx.drawImage(srcImgSecond, l * BOX_SIZE, numberAxis * BOX_SIZE, BOX_SIZE, BOX_SIZE);
        } else {
            this.clearStyleCell(a, numberAxis)
            this.clearStyleCell(b, numberAxis)
            let srcImgPrimary = this._getSwapImage(k, numberAxis, a, axis)
            let srcImgSecond = this._getSwapImage(l, numberAxis, b, axis)
            this.ctx.drawImage(srcImgPrimary, numberAxis * BOX_SIZE, k * BOX_SIZE, BOX_SIZE, BOX_SIZE);
            this.ctx.drawImage(srcImgSecond, numberAxis * BOX_SIZE, l * BOX_SIZE, BOX_SIZE, BOX_SIZE);
        }
    }

    loadAll() {
        this.imgMgr = new Shape(source.SOURCE_IMG) //generate image for cell;
        this.imgMgr.loadAll().then(() => {
            this.draw();
        })
        return this._scanBoard();
    }
    _scanBoard() {
        const { board } = this;
        let cells = board.cells;
        let matrix = this.matrixService.convertCellsToMatrix(cells); //convert to Matrix defined in file .proto
        return this.matrixService.scanMatrixRequest(matrix).then(async (result) => {
            // let listMatches = result.listMatches;
            // await this.clearMatrix(listMatches);
            // return result.isLoop;
            return { 
                matches: result.listMatches, 
                isLoop: result.isLoop }
        }).catch((err) => {
            throw err;
        })

    }
    draw() {
        const { ctx, board } = this
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        let row = board.getCells().length;
        let column = board.getCells()[0].length;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                const cell = board.getCell(i, j);

                this.fillCell(i, j, cell);
                // this.drawImage(i, j, cell);
            }
        }
    }
    fillCell(row, col, cell) {
        this.drawCell(row, col, cell);
        this.drawImage(row, col, cell);
    }
    drawCell(i, j, cell) {
        const { ctx, cellSize } = this;
        ctx.fillStyle = cell.attribute.color;
        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
        ctx.lineWidth = 3;
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = cell.attribute.colorBorder;
        ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);

    }

    click(primary, second) {
        const { row, col } = primary;
        const { board } = this
        const cell = board.getCell(row, col);
        cell.attribute.color = config.COLOR.selected
        this.fillCell(row, col, cell);
        if (second != null) {
            const cell = board.getCell(second.row, second.col);
            cell.attribute.color = config.COLOR.default
            this.fillCell(second.row, second.col, cell);
        }
        // this.drawImage(row, col, cell);

    }

    drawImage(row, col, cell) {
        const { ctx, imgMgr, cellSize } = this
        const shapeKey = cell.key;
        const img = imgMgr.get(shapeKey, 0)
        ctx.drawImage(img, col * cellSize, row * cellSize, cellSize, cellSize)
    }
    drawSpecial(row, col, cell) {
        if (cell.key != 0) {
            cell.color = config.COLOR.default;
            this.boardRender.drawImage(row, col, cell);
        }
    }
    createSpecial(matches, match) {
        const { board } = this;
        let row = matches[0][0];
        let col = matches[0][1];
        board.defineSpecial(row, col, matches.colorBorder, match);
        // this.board.cells[row][col].color = COLOR;
        this.drawSpecial(row, col, board.cells[row][col])
    }
    fadeAndShrinkEffect(col, row, fadeSpeed, shrinkRate, originalSize) {
        return new Promise((resolve, reject) => {
            let fadeOpacity = 1.0;
            let currentSize = originalSize;
            const shrinkInterval = setInterval(() => {
                fadeOpacity -= fadeSpeed;
                this.ctx.clearRect(col * originalSize, row * originalSize, originalSize, originalSize);
                const x = col * originalSize + (originalSize - currentSize) / 2;
                const y = row * originalSize + (originalSize - currentSize) / 2;
                this.ctx.globalAlpha = fadeOpacity;
                this.ctx.fillRect(x, y, currentSize, currentSize);
                currentSize -= shrinkRate;
                if (currentSize <= 0) {
                    currentSize = 0;
                    clearInterval(shrinkInterval);
                    resolve();
                }

            }, 50);
        });
    }

    allClear(preKey) {
        let matches = [];
        for (let i = 0; i < config.ATTRIBUTE.row; i++) {
            for (let j = 0; j < config.ATTRIBUTE.column; j++) {
                if (this.board.cells[i][j].key == preKey)
                    matches.push([i, j]);
            }
        }
        return matches;
    }

    addToQueueUnique(cells) {
        for (const cell of cells) {
            this.queue.push(cell);
        }
        this.queue = [...new Set(this.queue.map(JSON.stringify))].map(JSON.parse);
    }
    fadeAndClearCell(row, col) {
        const cell = this.board.cells[row][col];
        const fadePromise = this.fadeAndShrinkEffect(col, row, 0.1, 5, config.ATTRIBUTE.boxSize);

        cell.key = 0;
        cell.index = 0;
        cell.type = types.NORMAL;
        cell.color = config.COLOR.default;
        cell.isQueue = false;

        this.drawSpecial(col, row, cell);
        return fadePromise;
    }

    async handleExclusive(matches) {
        const { board } = this
        let temp = matches.slice();
        let promises = [];
        let listMatches = [];
        // Xử lý từng viên đá trong match chính
        for (const [row, col] of temp) {
            const cell = board.cells[row][col];
            if (!cell.isNew) {
                // Kỹ năng đặc biệt
                if (cell.type !== types.NORMAL) {
                    listMatches.push(...this.handleSigleSkill(row, col));
                }

                // Ghi nhận key nếu cần
                if ((cell.index !== 0 || cell.key === 6) && !cell.isQueue) {
                    if (cell.key !== 0 && cell.key !== 6) {
                        this._preKey = cell.key;
                    }
                }

                promises.push(this.fadeAndClearCell(row, col));
            } else {
                cell.isNew = false;
            }
        }
        // Xử lý các match phụ do kỹ năng
        for (const [row, col] of listMatches) {
            const cell = this.board.cells[row][col];
            if (!cell.isNew) {
                if ((cell.index !== 0 || cell.key === 6)) {
                    if (cell.key !== 0 && cell.key !== 6) {
                        this._preKey = cell.key;
                    }

                    this.addToQueueUnique([[row, col]]);
                    continue;
                }

                promises.push(this.fadeAndClearCell(row, col));
                temp.push([row, col]);
            } else {
                cell.isNew = false;
            }
        }
        await Promise.all(promises);
        return temp;
    }
    handleSigleSkill(row, col) {
        const { board } = this
        // let row = matches[0];
        // let col = matches[1];
        let matches = [];
        switch (board.cells[row][col].type) {
            case types.VERTICAL:
                {
                    let colsIndex = [];
                    this.#dfsSkill(row, row + 1, colsIndex, config.ATTRIBUTE.row);
                    if (colsIndex.length) {
                        colsIndex.map(e => matches.push([e, col]))
                    }
                    break;
                }
            case types.HORIZONAL:
                {
                    let rowsIndex = [];
                    this.#dfsSkill(col, col + 1, rowsIndex, config.ATTRIBUTE.column);
                    if (rowsIndex.length) {
                        rowsIndex.map(e => matches.push([row, e]))
                    }
                    break;
                }
            case types.BOOM:
                {
                    let dx = [-1, 0, 1, 1, 1, 0, -1, -1];
                    let dy = [-1, -1, -1, 0, 1, 1, 1, 0];
                    this.#dfsSkillBoom(row, col, dx, dy, matches);
                    break;
                }
            case types.DESTROY:
                matches = this.#clearByKey();
                break;
        }
        if (matches.length) {
            return matches;
        }
        return null;
    }
    #dfsSkill(i, j, indexs, limit) {
        if ((i >= 0 && i < limit) || (j >= 0 && j < limit)) {
            if (i < limit && i >= 0) {
                indexs.push(i)
            }
            if (j < limit && j >= 0) {
                indexs.push(j)
            }
            this.#dfsSkill(i - 1, j + 1, indexs, limit)
        }
    }
    #clearByKey() {
        this.boardRender.allClear(this._preKey);
    }
    #dfsSkillBoom(i, j, dx, dy, indexs) {
        for (let k = 0; k < dx.length; k++) {
            let i1 = i + dx[k];
            let j1 = j + dy[k];
            if (i1 >= 0 && i1 < config.ATTRIBUTE.row && j1 >= 0 && j1 < config.ATTRIBUTE.column) {
                indexs.push([i1, j1]);
            }
        }
    }
    moveDown(col, len, resolve) {
        const { board } = this
        while (len >= 0) {
            if (board.cells[len][col].key != 0) {
                len--;
                continue;
            } else {
                for (let k = len; k >= 0; k--) {
                    if (k == 0) {
                        let num = getRandomInt(source.MAP_SRC_IMG.length - 1);
                        board.cells[k][col].key = num;
                        this.drawImage(col, k, board.cells[k][col]);
                    } else {
                        let pre = { row: k, col: col, }
                        let pos = { row: k - 1, col: col, }
                        const index = this.queue.findIndex(element => JSON.stringify(element) === JSON.stringify([[pos.row, pos.col]]));
                        if (index >= 0) {
                            this.queue[index][0] = [pre.row, pre.col];
                        }
                        board.swap(pre, pos);
                    }
                }
                len = config.ATTRIBUTE.row - 1;
            }
            // isLoop = true;
            board.refeshVisitedItems();
            resolve
        }
    }

}