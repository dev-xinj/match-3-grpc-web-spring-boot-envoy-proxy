import { config, source } from "../constants/config"
import { types } from "../constants/types"
import { getRandomInt } from "../utils/common"
import Shape from "./Shape"

const BOX_SIZE = config.ATTRIBUTE.boxSize
export class BoardRenderer {
    constructor(board, ctx) {
        this.board = board
        this.ctx = ctx
        this.cellSize = BOX_SIZE
        this.queue = []
    }

    swapEffect = (matches) => {
        return new Promise((resolve) => {

            let a;
            let b;
            let axis;
            let numberAxis;
            if (matches.length) {
                if (matches[0][0] == matches[1][0]) {
                    axis = "HORIZONTAL";
                    numberAxis = matches[0][0];
                    a = Math.min(matches[0][1], matches[1][1]) //col
                    b = Math.max(matches[0][1], matches[1][1])  //col
                } else if (matches[0][1] == matches[1][1]) {
                    axis = "VERTICAL";
                    numberAxis = matches[0][1];
                    a = Math.min(matches[0][0], matches[1][0]) //row
                    b = Math.max(matches[0][0], matches[1][0]) //row
                }
            }

            let speed = 0.09;
            let isAnimating = (k, l) => {
                if (k >= b && l <= a) {
                    return false;
                } else {
                    return true;
                }
            };
            let drawBlock = (x, y, i) => {
                let src;
                if (axis == 'HORIZONTAL') {
                    src = this.imgMgr.get(this.cells[Math.floor(x)][Math.floor(i)].key, this.cells[Math.floor(x)][Math.floor(i)].index);
                } else if (axis == 'VERTICAL') {
                    src = this.imgMgr.get(this.cells[Math.floor(i)][Math.floor(y)].key, this.cells[Math.floor(i)][Math.floor(y)].index);
                }
                this.ctx.drawImage(src, y * BOX_SIZE, x * BOX_SIZE, BOX_SIZE, BOX_SIZE);
            }
            let isAnimated = isAnimating(a, b);
            let draw = (k, l) => {
                if (axis == 'HORIZONTAL') {
                    if (!isAnimated) {
                        let temp = this.cells[numberAxis][a];
                        this.cells[numberAxis][a] = this.cells[numberAxis][b];
                        this.drawCell(a, numberAxis, this.cells[numberAxis][a]);
                        this.cells[numberAxis][b] = temp;
                        this.drawCell(b, numberAxis, this.cells[numberAxis][b]);
                        resolve();
                        return;
                    };
                    this.ctx.clearRect(a * BOX_SIZE, numberAxis * BOX_SIZE, BOX_SIZE, BOX_SIZE);
                    this.ctx.clearRect(b * BOX_SIZE, numberAxis * BOX_SIZE, BOX_SIZE, BOX_SIZE);

                    k += speed;
                    drawBlock(numberAxis, k, a)
                    // this.drawDiamond(k, numberAxis, this.cells[numberAxis][k]);
                    l -= speed;
                    drawBlock(numberAxis, l, b)
                    // this.drawDiamond(l, numberAxis, this.cells[numberAxis][l]);

                } else if (axis == 'VERTICAL') {
                    if (!isAnimated) {
                        let temp = this.cells[a][numberAxis];
                        this.cells[a][numberAxis] = this.cells[b][numberAxis];
                        this.drawCell(numberAxis, a, this.cells[a][numberAxis]);
                        this.cells[b][numberAxis] = temp;
                        this.drawCell(numberAxis, b, this.cells[b][numberAxis]);
                        resolve();
                        return;
                    };

                    this.ctx.clearRect(numberAxis * BOX_SIZE, a * BOX_SIZE, BOX_SIZE, BOX_SIZE);
                    this.ctx.clearRect(numberAxis * BOX_SIZE, b * BOX_SIZE, BOX_SIZE, BOX_SIZE);

                    k += speed;
                    drawBlock(k, numberAxis, a)
                    // this.drawDiamond(numberAxis, k, this.cells[k][numberAxis]);
                    l -= speed;
                    drawBlock(l, numberAxis, b)
                    // this.drawDiamond(numberAxis, l, this.cells[l][numberAxis]);
                }
                if (isAnimated) {
                    requestAnimationFrame(() => { draw(k, l) });
                }
                isAnimated = isAnimating(k, l);
            }
            draw(a, b);
        })


    }
    loadAll() {
        this.imgMgr = new Shape(source.SOURCE_IMG) //generate image for cell;
        this.imgMgr.loadAll().then(() => {
            this.draw();
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
                this.drawCell(i, j, cell.attribute.color, cell.attribute.colorBorder);
                this.drawImage(i, j, cell);
            }
        }
    }
    drawCell(i, j, color, colorBorder) {
        const { ctx, cellSize } = this;
        ctx.fillStyle = color;
        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
        ctx.lineWidth = 3;
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = colorBorder;
        ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);

    }

    click(row, col) {
        const { board } = this
        this.drawCell(row, col, config.COLOR.selected, config.COLOR.border);
        const cell = board.getCell(row, col);
        this.drawImage(row, col, cell);

        console.log('click: ', row, col)
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
        // this.cells[row][col].color = COLOR;
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
                if (this.cells[i][j].key == preKey)
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
        const cell = this.cells[row][col];
        const fadePromise = this.boardRender.fadeAndShrinkEffect(col, row, 0.1, 5, config.ATTRIBUTE.boxSize);

        cell.key = 0;
        cell.index = 0;
        cell.type = types.NORMAL;
        cell.color = config.COLOR.default;
        cell.isQueue = false;

        this.boardRender.drawSpecial(col, row, cell);
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
            const cell = this.cells[row][col];
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
                    console.log('Power vertical.');
                    this.#dfsSkill(row, row + 1, colsIndex, config.ATTRIBUTE.row);
                    if (colsIndex.length) {
                        colsIndex.map(e => matches.push([e, col]))
                    }
                    break;
                }
            case types.HORIZONAL:
                {
                    let rowsIndex = [];
                    console.log('Power horizontal.');
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