import Item from "./item.js";
import Shape from "./shape.js";
import MatrixServer from "../matrix_grpc_service"
import { generateArrayItemsDefault } from './mockData.js';
import { Empty } from "google-protobuf/google/protobuf/empty_pb.js";
const Score = document.getElementById('score');
const ROWS = 10;
const COLUMNS = 18;
const BOX_SIZE = 40;
const COLOR = "rgba(248 238 164 / 1)";
const COLOR_SELECTED = "rgba(250 128 114 / 1)";
const COLOR_BORDER = "#ccc";
const COLOR_SUGGESTED = "rgba(0 128 128 / 1)";
const SPECIAL = "SHAPE_SPECIAL";
// let isLoop = false;
let timeout;
let preKey;
let dx = [-1, 1]; //trên dưới đảo ngược dx dy là trái phải
let dy = [0, 0];
const MAP_TYPE = ['NORMAL',
    'BOOM',
    'HORIZONAL',
    'VERTICAL',
    'DESTROY'
];
const TYPE = Object.freeze({
    NORMAL: 'NORMAL',//0
    BOOM: 'BOOM',//1
    HORIZONAL: 'HORIZONAL',//3
    VERTICAL: 'VERTICAL',//5
    DESTROY: 'DESTROY',//7 //ăn 5
    CROSS: 'CROSS',//8
    MEGA_BOOM: 'MEGA_BOOM', //boom + boom 2
    COMBO_BOOM: 'COMBO_BOOM', //hori or verti + Bom //
    ULTRA_DESTROY: 'ULTRA_DESTROY', //DESTROY + BOOM
    EXTRA_DESTROY: 'EXTRA_DESTROY', //hori or verti + DESTROY
    MULTI_DESTROY: 'MULTI_DESTROY' //2 destroy

});
const DEFINE_COMBO = [
    { COMBO: [TYPE.HORIZONAL, TYPE.VERTICAL], result: "CROSS" },
    { COMBO: [TYPE.BOOM], result: "MEGA_BOOM" },
    { COMBO: [TYPE.BOOM, TYPE.HORIZONAL, TYPE.VERTICAL], result: "COMBO_BOOM" },
    { COMBO: [TYPE.DESTROY, TYPE.BOOM], result: "ULTRA_DESTROY" },
    { COMBO: [TYPE.DESTROY, TYPE.HORIZONAL, TYPE.VERTICAL], result: "EXTRA_DESTROY" },
    { COMBO: [TYPE.DESTROY], result: "MULTI_DESTROY" },
];
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
export class Board {
    #shape;
    #items;
    #score;
    #listMatches = [];
    #isVisited;
    #matrixServer;
    constructor(ctx, shape) {
        this.ctx = ctx;
        this.#shape = shape;
        this.BOX_SIZE = BOX_SIZE;
        this.#isVisited = this.#init();
        this.#score = 0;
        this.suggestes = [];
        this.drawSuggest = [];
        this.queue = [];
        this.#matrixServer = new MatrixServer();
    }

    get items() {
        return this.#items;
    }
    get score() {
        return this.#score;
    }
    get listMatches() {
        return this.#listMatches;
    }

    #generateItems(itemList) {
        // return mock();
        return itemList.map((element) => {
            return element.map((item) => new Item(item.key, item.index, COLOR, COLOR_BORDER, false, false, TYPE.NORMAL, false))
        })
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
    #refeshVisitedItems() {
        this.#items.map(elements => {
            return elements.map(item => {
                item.isVisited ? item.isVisited = false : item
                item.isNew ? item.isNew = false : item
            })
        })
    }
    #generateScore(newScore) {
        if (newScore > 5) {
            return this.score + ((newScore - 5) * 300);
        } else {
            return this.score + (newScore * 100);
        }
    }
    #init() {
        return Array.from({ length: ROWS }, () =>
            Array(COLUMNS).fill(false));
    }

    #refreshBoardVisited() {
        this.#isVisited = this.#isVisited.map((elements) => {
            return elements.map(item => item === true ? false : item)
        })
    }
    #dfs(i, j, matches, key, isVisited, dx, dy, isHori) {
        if (this.#items[i][j].key == key) {
            matches.push([i, j]);
        }
        isVisited[i][j] = true;
        if (isHori) {
            this.#items[i][j].isVisited = true;
        }
        for (let k = 0; k < 2; k++) {
            let i1 = i + dx[k];
            let j1 = j + dy[k];
            if (i1 >= 0 && i1 < ROWS && j1 >= 0 && j1 < COLUMNS && this.items[i1][j1].key == key && !isVisited[i1][j1] && !this.#items[i1][j1].isVisited) {

                this.#dfs(i1, j1, matches, key, isVisited, dx, dy, isHori);
            }
        }
    }

    drawDiamond(x, y, item) {
        //y: là row
        //x: là col
        this.ctx.fillStyle = item.color;
        this.ctx.fillRect(x * BOX_SIZE, y * BOX_SIZE, BOX_SIZE, BOX_SIZE)
        this.ctx.lineWidth = 3;
        this.ctx.globalAlpha = 1.0;
        this.ctx.strokeStyle = item.colorBorder;
        this.ctx.strokeRect(x * BOX_SIZE, y * BOX_SIZE, BOX_SIZE, BOX_SIZE);
        if (item) {
            if (item.index == "SHAPE_SPECIAL") {
                item.key = this.#shape.getIndexByKey("SHAPE_SPECIAL");
                item.index = 0;
            }
            let src = this.#shape.getSrcImage(item.key, item.index);
            this.ctx.drawImage(src, x * BOX_SIZE, y * BOX_SIZE, BOX_SIZE, BOX_SIZE);
        }

    }
    #clearDraw(x, y, item) {
        if (item.key != 0) {
            item.color = COLOR;
            this.drawDiamond(x, y, item);
        }
    }
    async drawBoard() {
        for (let r = 0; r < this.#items.length; r++) {
            for (let c = 0; c < this.#items[0].length; c++) {
                this.drawDiamond(c, r, this.#items[r][c]);
            }
        }
    }

    swapElement(pre, pos) {
        let a = this.#items[pre.row][pre.col];
        this.#items[pre.row][pre.col] = this.#items[pos.row][pos.col];
        this.#items[pos.row][pos.col] = a;
        this.drawDiamond(pre.col, pre.row, this.#items[pre.row][pre.col]);
        this.drawDiamond(pos.col, pos.row, this.#items[pos.row][pos.col]);
    }
    swap = (matches) => {
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
                    src = this.#shape.getSrcImage(this.#items[Math.floor(x)][Math.floor(i)].key, this.#items[Math.floor(x)][Math.floor(i)].index);
                } else if (axis == 'VERTICAL') {
                    src = this.#shape.getSrcImage(this.#items[Math.floor(i)][Math.floor(y)].key, this.#items[Math.floor(i)][Math.floor(y)].index);
                }
                this.ctx.drawImage(src, y * BOX_SIZE, x * BOX_SIZE, BOX_SIZE, BOX_SIZE);
            }
            let isAnimated = isAnimating(a, b);
            let draw = (k, l) => {
                if (axis == 'HORIZONTAL') {
                    if (!isAnimated) {
                        let temp = this.#items[numberAxis][a];
                        this.#items[numberAxis][a] = this.#items[numberAxis][b];
                        this.drawDiamond(a, numberAxis, this.#items[numberAxis][a]);
                        this.#items[numberAxis][b] = temp;
                        this.drawDiamond(b, numberAxis, this.#items[numberAxis][b]);
                        resolve();
                        return;
                    };
                    this.ctx.clearRect(a * BOX_SIZE, numberAxis * BOX_SIZE, BOX_SIZE, BOX_SIZE);
                    this.ctx.clearRect(b * BOX_SIZE, numberAxis * BOX_SIZE, BOX_SIZE, BOX_SIZE);

                    k += speed;
                    drawBlock(numberAxis, k, a)
                    // this.drawDiamond(k, numberAxis, this.#items[numberAxis][k]);
                    l -= speed;
                    drawBlock(numberAxis, l, b)
                    // this.drawDiamond(l, numberAxis, this.#items[numberAxis][l]);

                } else if (axis == 'VERTICAL') {
                    if (!isAnimated) {
                        let temp = this.#items[a][numberAxis];
                        this.#items[a][numberAxis] = this.#items[b][numberAxis];
                        this.drawDiamond(numberAxis, a, this.#items[a][numberAxis]);
                        this.#items[b][numberAxis] = temp;
                        this.drawDiamond(numberAxis, b, this.#items[b][numberAxis]);
                        resolve();
                        return;
                    };

                    this.ctx.clearRect(numberAxis * BOX_SIZE, a * BOX_SIZE, BOX_SIZE, BOX_SIZE);
                    this.ctx.clearRect(numberAxis * BOX_SIZE, b * BOX_SIZE, BOX_SIZE, BOX_SIZE);

                    k += speed;
                    drawBlock(k, numberAxis, a)
                    // this.drawDiamond(numberAxis, k, this.#items[k][numberAxis]);
                    l -= speed;
                    drawBlock(l, numberAxis, b)
                    // this.drawDiamond(numberAxis, l, this.#items[l][numberAxis]);
                }
                if (isAnimated) {
                    requestAnimationFrame(() => { draw(k, l) });
                }
                isAnimated = isAnimating(k, l);
            }
            draw(a, b);
        })


    }

    #specialMatch(pre, pos) {
        let type;
        let results;
        if (this.#items[pre.row][pre.col].index != 0 && this.#items[pos.row][pos.col].index != 0) {
            type = this.#defineType(this.#items[pre.row][pre.col].type, this.#items[pos.row][pos.col].type)
            this.#items[pre.row][pre.col].isQueue = true;
            this.#items[pos.row][pos.col].isQueue = true;
            results = this.#handleDoubleSkill([pos.row, pos.col], type);
        }
        else if (this.#items[pre.row][pre.col].key == 6 || this.#items[pos.row][pos.col].key == 6) {
            type = this.#defineType(this.#items[pre.row][pre.col].type, this.#items[pos.row][pos.col].type)
            let key;
            let index;
            if (this.#defineType(this.#items[pre.row][pre.col].key == 6)) {
                key = this.#defineType(this.#items[pos.row][pos.col].key)
                index = this.#defineType(this.#items[pos.row][pos.col].index)
                this.#items[pos.row][pos.col].isQueue = true;
            } else {
                key = this.#defineType(this.#items[pre.row][pre.col].key)
                index = this.#defineType(this.#items[pre.row][pre.col].index)
                this.#items[pre.row][pre.col].isQueue = true;

            }
            results = this.#handleDoubleSkill([pre.row][pre.col], type, key, index);
        }

        return new Promise(async (resolve, reject) => {
            let matches = [[pre.row, pre.col], [pos.row, pos.col]];
            if (results && results.length) {
                try {
                    this.defaultItems(pre.row, pre.col)
                    this.defaultItems(pos.row, pos.col)
                    //remove
                    results = [...new Set(results.map(JSON.stringify))].map(JSON.parse);
                    await this.#dismissItems(results)
                    await new Promise(resolve => setTimeout(resolve, 300))

                    let sortArr = [...new Set(results.slice(1).sort((a, b) => a - b).flat())];
                    sortArr.forEach((e) => {
                        this.moveDown(e, ROWS - 1);
                    })
                    await new Promise(resolve => setTimeout(resolve, 500))

                    while (this.queue.length) {
                        let newData = [];
                        newData = await this.removeDiamon(this.queue.shift());
                        await new Promise(resolve => setTimeout(resolve, 300))
                        let sortArr = [...new Set(newData.slice(1).sort((a, b) => a - b).flat())];
                        sortArr.forEach((e) => {
                            this.moveDown(e, ROWS - 1);
                        })
                        await new Promise(resolve => setTimeout(resolve, 500))
                    }
                    resolve()
                } catch (error) {
                    reject()
                }

            } else {
                this.browseDiamon(matches).then(async (data) => {
                    console.log(!data);
                    if (!data) {
                        await this.swap(matches)
                        reject()
                    } else {
                        resolve()
                    }
                }).catch(() => {
                    reject()
                })
            }
        })


    }

    async validSwap(pre, pos) {
        let matches = [[pre.row, pre.col], [pos.row, pos.col]];
        await this.swap(matches)
        this.#specialMatch(pre, pos).then(async () => {
            console.log("into special")
            await this.scan();
        }).catch(() => {
            console.log("Not Element Matches")
        })
    }
    effectClick(col, row) {
        this.#items[row][col].color = COLOR_SELECTED;
        this.drawDiamond(col, row, this.#items[row][col]);
        this.clickOn = {
            row: row,
            col: col,
        }
        return this.clickOn;
    }


    suggestScore() {
        let length = this.suggestes.length;
        this.drawSuggest = [];
        for (let i = 0; i < length; i++) {
            let isSuggest = this.showSuggest(this.suggestes[i]);
            if (isSuggest) {
                let temp = this.suggestes[i];
                this.drawSuggest.push([temp[0][0], temp[0][1]])
                this.drawSuggest.push([temp[1][0], temp[1][1]])
                break;
            }
            // console.log(this.suggestes[i]);
        }
    }

    isSuggest(arr, dx, dy) {
        let key = this.#items[arr[0]][arr[1]].key
        let isSuggest = false;
        for (let i = 0; i < 3; i++) {
            let i1 = arr[0] + dx[i];
            let j1 = arr[1] + dy[i];
            if (i1 >= 0 && i1 < ROWS && j1 >= 0 && j1 < COLUMNS && this.#items[i1][j1].key == key) {
                this.drawSuggest.push([i1, j1]);
                isSuggest = true;
            }
        }
        return isSuggest;
    }

    showSuggest(arr) {
        //dx, dy cho hàng dọc
        //đảo dx, dy thì là ngang;
        let dx = [-2, -1, -1]; //
        let dy = [0, -1, +1];
        let isSuggest;
        if (arr[0][0] != arr[1][0]) { //2 dọc
            isSuggest = this.isSuggest(arr[0], dx, dy) //duyệt phía trên
            if (!isSuggest) {
                return this.isSuggest(arr[1], dx.filter((item) => { return Math.abs(item) }), dy);//duyệt phía dưới
            } else {
                return isSuggest;
            }
        } else {
            isSuggest = this.isSuggest(arr[0], dy, dx)//duyệt bên trái
            if (!isSuggest) {
                return this.isSuggest(arr[1], dy, dx.filter((item) => { return Math.abs(item) })); //duyệt bên phải
            } else {
                return isSuggest;
            }

        }
    }


    moveDown(col, len) {
        new Promise((resolve, reject) => {
            while (len >= 0) {
                if (this.#items[len][col].key != 0) {
                    len--;
                    continue;
                } else {
                    for (let k = len; k >= 0; k--) {
                        if (k == 0) {
                            let num = getRandomInt(this.#shape.length() - 1);
                            this.#items[k][col].key = num;
                            this.drawDiamond(col, k, this.#items[k][col]);
                        } else {
                            let pre = { row: k, col: col, }
                            let pos = { row: k - 1, col: col, }
                            const index = this.queue.findIndex(element => JSON.stringify(element) === JSON.stringify([[pos.row, pos.col]]));
                            if (index >= 0) {
                                this.queue[index][0] = [pre.row, pre.col];
                            }
                            this.swapElement(pre, pos);
                        }
                    }
                    len = ROWS - 1;
                }
                // isLoop = true;
                this.#refeshVisitedItems();
                resolve()
            }
        })
    }
    defaultItems(row, col) {
        this.#items[row][col].index = 0;
        this.#items[row][col].type = TYPE.NORMAL;
        this.#items[row][col].color = COLOR;
        this.#items[row][col].isQueue = false;
        this.#clearDraw(col, row, this.#items[row][col]);
    }
    async #dismissItems(matches) {
        let promises = [];
        if (matches.length) {
            for (let i = 0; i < matches.length; i++) {
                let row = matches[i][0];
                let col = matches[i][1];
                if (!this.#items[row][col].isNew) {
                    if (this.#items[row][col].index != 0 || this.#items[row][col].key == 6) {
                        if (this.#items[row][col].key != 0 && this.#items[row][col].key != 6) {
                            preKey = this.#items[row][col].key;
                        }
                        this.queue.push([[row, col]]);
                        this.queue = [...new Set(this.queue.map(JSON.stringify))].map(JSON.parse);
                        continue
                    }

                    let fadePromise = this.fadeAndShrinkEffect(col, row, 0.1, 5, BOX_SIZE)
                    this.#items[row][col].key = 0;
                    this.#items[row][col].index = 0;
                    this.#items[row][col].type = TYPE.NORMAL;
                    this.#items[row][col].color = COLOR;
                    this.#items[row][col].isQueue = false;
                    this.#clearDraw(col, row, this.#items[row][col]);
                    promises.push(fadePromise);
                } else {
                    this.#items[row][col].isNew = false
                }
            }
        }
        return await Promise.all(promises);
    }

    async removeDiamon(matches) {
        if (matches == null) {
            return;
        }
        let temp = matches.slice();
        let length = temp.length;
        // if (length > 2) {
        let promises = [];
        let listMatches = [];
        this.resetTimer();
        this.#score = this.#generateScore(length);
        this.showScore(Score);
        for (let i = 0; i < temp.length; i++) {
            let row = temp[i][0];
            let col = temp[i][1];
            if (!this.#items[row][col].isNew) {
                if (this.#items[row][col].type != TYPE.NORMAL) {
                    listMatches = listMatches.concat(this.#handleSigleSkill(row, col));
                }
                if ((this.#items[row][col].index != 0 || this.#items[row][col].key == 6) && this.#items[row][col].isQueue == false) {
                    if (this.#items[row][col].key != 0 && this.#items[row][col].key != 6) {
                        preKey = this.#items[row][col].key;
                    }
                    // let newMatches = this.#handleSigleSkill(row, col, preKey);
                    // this.queue.push([[row, col]]);
                    // this.#items[row][col].isQueue = true;
                    // continue
                    // if (newMatches) {
                    //     temp = temp.concat(newMatches);
                    // }
                }

                let fadePromise = this.fadeAndShrinkEffect(col, row, 0.1, 5, BOX_SIZE)
                this.#items[row][col].key = 0;
                this.#items[row][col].index = 0;
                this.#items[row][col].type = TYPE.NORMAL;
                this.#items[row][col].color = COLOR;
                this.#items[row][col].isQueue = false;
                this.#clearDraw(col, row, this.#items[row][col]);
                promises.push(fadePromise);
                // this.#clearDraw(col, row, this.#items[row][col]);
            } else {
                this.#items[row][col].isNew = false
            }
        }
        if (listMatches.length) {
            for (let i = 0; i < listMatches.length; i++) {
                let row = listMatches[i][0];
                let col = listMatches[i][1];
                if (!this.#items[row][col].isNew) {
                    if (this.#items[row][col].index != 0 || this.#items[row][col].key == 6) {
                        if (this.#items[row][col].key != 0 && this.#items[row][col].key != 6) {
                            preKey = this.#items[row][col].key;
                        }
                        this.queue.push([[row, col]]);
                        this.queue = [...new Set(this.queue.map(JSON.stringify))].map(JSON.parse);
                        // this.#items[row][col].isQueue = true;
                        continue
                    }

                    let fadePromise = this.fadeAndShrinkEffect(col, row, 0.1, 5, BOX_SIZE)
                    this.#items[row][col].key = 0;
                    this.#items[row][col].index = 0;
                    this.#items[row][col].type = TYPE.NORMAL;
                    this.#items[row][col].color = COLOR;
                    this.#items[row][col].isQueue = false;
                    this.#clearDraw(col, row, this.#items[row][col]);
                    temp.push([row, col]);
                    promises.push(fadePromise);
                    // this.#clearDraw(col, row, this.#items[row][col]);
                } else {
                    this.#items[row][col].isNew = false
                }
            }

        }
        await Promise.all(promises);
        // isLoop = true;
        // } else if (length == 2) {
        //     this.suggestes.push(matches);
        // }
        this.#refeshVisitedItems();
        return temp;
    }
    #elementMatch(i, j, key, isVisited) {
        if (this.#items[i][j].key == key && !isVisited[i][j]) {
            let newIsVisited = this.#init();
            let matchCols = new Array();
            this.#dfs(i, j, matchCols, key, isVisited, dx, dy, false);
            let matchRows = new Array();
            for (let k = 0; k < matchCols.length; k++) {
                this.#dfs(matchCols[k][0], matchCols[k][1], matchRows, key, newIsVisited, dy, dx, true);
            }

            let max = getMatch(matchRows);

            if (max != null) {
                matchRows = matchRows.filter((items) => {
                    return items[0] == max;
                })
            }
            let length = this.#listMatches.length;
            if (matchCols.length > 2) {
                if (!this.#listMatches[length]) {
                    this.#listMatches[length] = {};
                    this.#listMatches[length].x;
                    this.#listMatches[length].y;
                }
                this.#listMatches[length].y = (matchCols);
            }
            if (matchRows.length > 2) {
                if (!this.#listMatches[length]) {
                    this.#listMatches[length] = {};
                    this.#listMatches[length].y;
                    this.#listMatches[length].x;
                }
                this.#listMatches[length].x = (matchRows);
            }
        }
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

    #dfsSkillBoom(i, j, dx, dy, indexs) {
        for (let k = 0; k < dx.length; k++) {
            let i1 = i + dx[k];
            let j1 = j + dy[k];
            if (i1 >= 0 && i1 < ROWS && j1 >= 0 && j1 < COLUMNS) {
                indexs.push([i1, j1]);
            }
        }
    }
    #handleSigleSkill(row, col) {
        // let row = matches[0];
        // let col = matches[1];
        let matches = [];
        switch (this.#items[row][col].type) {
            case TYPE.VERTICAL:
                let colsIndex = [];
                console.log('Power vertical.');
                this.#dfsSkill(row, row + 1, colsIndex, ROWS);
                if (colsIndex.length) {
                    colsIndex.map(e => matches.push([e, col]))
                }
                break;
            case TYPE.HORIZONAL:
                let rowsIndex = [];
                console.log('Power horizontal.');
                this.#dfsSkill(col, col + 1, rowsIndex, COLUMNS);
                if (rowsIndex.length) {
                    rowsIndex.map(e => matches.push([row, e]))
                }
                break;
            case TYPE.BOOM:
                let dx = [-1, 0, 1, 1, 1, 0, -1, -1];
                let dy = [-1, -1, -1, 0, 1, 1, 1, 0];
                this.#dfsSkillBoom(row, col, dx, dy, matches);
                break;
            case TYPE.DESTROY:
                matches = this.#clearByKey();
                break;
        }
        if (matches.length) {
            return matches;
        }
        return null;
    }
    #handleDoubleSkill(matches, type, index) {
        let row = matches[0];
        let col = matches[1];
        let temp = [];
        // let matches = [];
        switch (type) {
            case TYPE.CROSS:
                let cols = [];
                let rows = [];
                console.log('Power CROSS.');
                this.#dfsSkill(col, col - 1, cols, COLUMNS);
                this.#dfsSkill(row, row - 1, rows, ROWS);
                if (cols.length) {
                    cols.map(e => temp.push([row, e]))
                }
                if (rows.length) {
                    rows.map(e => temp.push([e, col]))
                }

                break;

            case TYPE.COMBO_BOOM:
                let colsIndex = [];
                let rowsIndex = [];
                console.log('COMBO_BOOM');
                this.#dfsSkill(col, col - 1, colsIndex, COLUMNS);
                this.#dfsSkill(row, row - 1, rowsIndex, ROWS);
                if (colsIndex.length) {
                    colsIndex.map(e => {
                        temp.push([row, e])
                        if (row + 1 < ROWS && row + 1 >= 0) {
                            temp.push([row + 1, e])
                        }
                        if (row - 1 < ROWS && row - 1 >= 0) {
                            temp.push([row - 1, e])
                        }
                    })
                }
                if (rowsIndex.length) {
                    rowsIndex.map(e => {
                        temp.push([e, col])
                        if (col + 1 < COLUMNS && col + 1 >= 0) {
                            temp.push([e, col + 1])

                        }
                        if (col - 1 < COLUMNS && col - 1 >= 0) {
                            temp.push([e, col - 1])
                        }
                    })
                }
                break;

            case TYPE.MEGA_BOOM: //2 BOOM
                let dx = [-1, 0, 1, 1, 1, 0, -1, -1, -2, 0, 2, 2, 2, 0, -2, -2];
                let dy = [-1, -1, -1, 0, 1, 1, 1, 0, -2, -2, -2, 0, 2, 2, 2, 0];
                this.#dfsSkillBoom(row, col, dx, dy, temp);
                break;

            case TYPE.EXTRA_DESTROY://hori or verti + DESTROY
                temp = this.#clearByKey();
                temp.forEach(e => { this.#items[e[0][1]].index == index })
                break;

            case TYPE.MULTI_DESTROY: //2 DESTROY
                break;

            case TYPE.ULTRA_DESTROY: //DESTROY + BOOM
                temp = this.#clearByKey();
                temp.forEach(e => { this.#items[e[0][1]].index == index })
                break;
        }
        if (temp.length) {
            return temp;
        }
    }


    mapSpecialShapes(matches, match) {
        let row = matches[0][0];
        let col = matches[0][1];
        this.#items[row][col].index = match;
        this.#items[row][col].type = match == SPECIAL ? TYPE[MAP_TYPE[4]] : TYPE[MAP_TYPE[match]];
        this.#items[row][col].isNew = true;
        this.#items[row][col].colorBorder = matches.colorBorder;
        // this.#items[row][col].color = COLOR;
        this.#clearDraw(col, row, this.#items[row][col]);
    }

    numberOfMatches(matches) {
        let length = matches.length;
        return (length >= 5) ? 2 : (length > 3 && length < 5) ? 1 : (length > 2 && length < 4) ? 0 : -1
    }
    defineNumberOfMatches(matches) {
        let length = matches.length;
        return (length >= 5) ? 5 : (length > 3 && length < 5) ? 3 : -1
    }

    #clearByKey() {
        let matches = [];
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLUMNS; j++) {
                if (this.#items[i][j].key == preKey)
                    matches.push([i, j]);
            }
        }
        return matches
    }

    async clearMatches(listMatches) {

        let mapSkill = [[[1], [1], [SPECIAL]],
        [[1], [2, 3], [2, SPECIAL]],
        [[SPECIAL], [SPECIAL, 3], [SPECIAL, SPECIAL]]];
        let newArr = [];
        let promises = [];
        for (const element of listMatches) {
            // listMatches.forEach(element => {
            newArr = [];
            if (element.y && element.x) {

                let mapIndex = mapSkill[this.numberOfMatches(element.x)][this.numberOfMatches(element.y)]

                this.mapSpecialShapes(element.x, mapIndex[0])
                mapIndex.length >= 2 ? this.mapSpecialShapes(element.y, mapIndex[1]) : null;
                newArr = element.x.concat(element.y).slice();
                // newArr = new Set(...new Set(newArr.filter(e => JSON.stringify(e))));
                newArr = newArr.filter((e) => {
                    return this.#items[e[0]][e[1]].isNew != true;
                })
            } else {
                let mapIndex;
                if (element.y) {
                    mapIndex = this.defineNumberOfMatches(element.y)
                    if (mapIndex != -1) {
                        if (mapIndex === 5) {
                            mapIndex = SPECIAL;
                        }
                        this.mapSpecialShapes(element.y, mapIndex);
                    }
                    newArr = element.y.slice();
                }

                else if (element.x) {

                    mapIndex = this.defineNumberOfMatches(element.x);
                    if (mapIndex != -1) {
                        if (mapIndex === 5) {
                            mapIndex = SPECIAL;
                        } else {
                            mapIndex = mapIndex - 1;
                        }
                        this.mapSpecialShapes(element.x, mapIndex);
                    }
                    newArr = element.x.slice();
                }
            }

            promises.push(this.removeDiamon(newArr))

        };
        await Promise.all(promises).then(async (data) => {

            data.forEach(item => {
                newArr = newArr.concat(item);
            })
            await new Promise(resolve => setTimeout(resolve, 300))
            let sortArr = [...new Set(newArr.flatMap(e => e.slice(1)).sort((a, b) => a - b).flat())];
            sortArr.forEach((e) => {
                this.moveDown(e, ROWS - 1);
            })
            await new Promise(resolve => setTimeout(resolve, 500))
        })
        let newData = [];
        while (this.queue.length) {
            newData = await this.removeDiamon(this.queue.shift());
            await new Promise(resolve => setTimeout(resolve, 300))
            let sortArr = [...new Set(newData.flatMap(e => e.slice(1)).sort((a, b) => a - b).flat())];
            sortArr.forEach((e) => {
                this.moveDown(e, ROWS - 1);
            })
            await new Promise(resolve => setTimeout(resolve, 500))
        }
    }

    // async autoScan() {
    //     let count = 0;
    //     do {
    //         this.suggestes = [];
    //         let length = this.#shape.length() - 1;
    //         isLoop = false;
    //         this.#listMatches = [];
    //         this.#refeshVisitedItems();
    //         while (length >= 0) {
    //             this.#refreshBoardVisited();
    //             this.scanAllImage(length, this.#isVisited)
    //             length--;
    //         }
    //         if (this.#listMatches.length) {
    //             try {
    //                 await this.clearMatches(this.#listMatches);
    //                 await new Promise(resolve => setTimeout(resolve, 500));
    //                 this.#refreshBoardVisited();
    //                 this.#refeshVisitedItems();
    //             } catch (error) {

    //             }
    //             this.#refeshVisitedItems();
    //         }
    //         count++;
    //     } while (isLoop)
    //     this.queue = [];
    //     this.suggestScore();
    //     if (this.drawSuggest.length == 0) {
    //         this.drawBoard()
    //     }
    // }


    scanAllImage(key, isVisited) {
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLUMNS; j++) {
                this.#elementMatch(i, j, key, isVisited)
            }
        }

    }
    #defineType(firstType, secondType) {
        for (let items of DEFINE_COMBO) {
            if (items.COMBO.includes(firstType) && items.COMBO.includes(secondType)) {
                return items.result;
            }
        }
        return null;
    }

    async browseDiamon(matches) {
        let promises = []
        if (matches.length) {
            this.#refreshBoardVisited();
            for (let i = 0; i < matches.length; i++) {
                this.#refeshVisitedItems();
                let row = matches[i][0]
                let col = matches[i][1]
                let key = this.#items[row][col].key;
                promises.push(new Promise(async (resolve, reject) => {
                    // this.#elementMatch(row, col, key, this.#isVisited)
                    this.elementMatchesRequest(row, col, key).then((data) => {
                        console.log("into brow")
                        resolve(data);
                    })
                }));
            }
        }
        this.#listMatches = [];
        let isBreak;
        return Promise.all(promises).then(async (data) => {
            data.forEach(e => {
                this.#listMatches.push(...e);
            })
            if (this.#listMatches.length) {
                await this.clearMatches(this.#listMatches).then(() => {
                    this.#refeshVisitedItems();
                    console.log("into clearMs")
                    isBreak = true;
                }).catch(() => {
                    isBreak = false;
                });
                console.log("into return isBreak")
                return isBreak;
            } else {
                console.log("return else")
                return false;
            }
        }).catch(() => {
            return false;
        })
    }

    drawBoardSuggest(color) {
        for (let i = 0; i < this.drawSuggest.length; i++) {
            let temp = this.drawSuggest[i];
            let row = temp[0]
            let col = temp[1]
            this.drawDiamond(col, row, this.#items[row][col], color);
        }
    }
    showScore(Score) {
        Score.innerText = this.score;
        Score.style.color = '#0744b6';
        Score.style.fontWeight = "900";
        Score.style.fontSize = "50px";
    }
    async clearMatrix(listMatches) {
        await this.clearMatches(listMatches)
    }
    callBoard(itemList, isMockData) {
        if (isMockData) {
            itemList = generateArrayItemsDefault();
        }
        this.#items = this.#generateItems(itemList);
    }
    async exportMatrix() {
        this.#matrixServer.exportMatrix(new Empty()).then(async (result) => {
            let itemList = result.map((row) => {
                return row.itemList;
            });
            this.callBoard(itemList, true);
            await this.drawBoard().then(async () => {
                await new Promise(resolve => setTimeout(resolve, 700));
                this.scan();
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    async scanMatrix() {
        let itemList = this.#items;
        let matrix = this.#matrixServer.createMatrix(itemList);
        return await this.#matrixServer.scanMatrixRequest(matrix).then(async (result) => {
            let listMatches = result.listMatches;
            await this.clearMatrix(listMatches);
            return result.isLoop;
        }).catch((err) => {
            throw err;
        })
    }

    async elementMatchesRequest(row, col, key) {
        let itemList = this.#items;
        let matrix = this.#matrixServer.createMatrix(itemList);
        try {
            let listMatches = await this.#matrixServer.elementMatchesRequest(row, col, key, matrix);
            return listMatches;
        } catch (error) {
            return null;
        }
    }

    async scan() {
        let isLoop = false;
        isLoop = await this.scanMatrix()
        while (isLoop) {
            isLoop = await this.scanMatrix()
            console.log('loop')
        }
    }
    noClickDetected() {
        this.drawBoardSuggest(COLOR_SUGGESTED);
    }
    resetTimer() {
        clearTimeout(timeout);
        timeout = setTimeout(this.noClickDetected(), 5000); // 10000ms = 10 giây
    }

    actionClick(preClicked, col, row) {
        if (preClicked) {
            let posClicked = this.effectClick(col, row);
            let k = posClicked.row;
            let l = posClicked.col;
            this.items[preClicked.row][preClicked.col].color = COLOR;
            this.items[posClicked.row][posClicked.col].color = COLOR;
            if (((l == preClicked.col && (k <= preClicked.row + 1 && k >= preClicked.row - 1)) //kiểm tra vị trí nhấn. Không được chọn ô chéo
                || (k == preClicked.row && l <= preClicked.col + 1 && l >= preClicked.col - 1))
                && this.items[preClicked.row][preClicked.col].key != this.items[posClicked.row][posClicked.col].key) {//kiếm tra nếu 2 ô chọn giống thì chọn lại ô thứ 2
                this.validSwap(preClicked, posClicked)
                preClicked = null;
            }
            else if (preClicked.row == k && preClicked.col == l) { //trường hợp nhấn 1 ô 2 lần
                this.drawDiamond(preClicked.col, preClicked.row, this.items[preClicked.row][preClicked.col]);
                preClicked = null;
            }
            else {
                this.drawDiamond(preClicked.col, preClicked.row, this.items[preClicked.row][preClicked.col]);
                preClicked = posClicked;
            }
        } else {
            if (this.drawSuggest.length) {
                this.drawBoardSuggest(COLOR);
            }
            preClicked = this.effectClick(col, row);
        }
        return preClicked;
    }

}



function countSort(arr) {
    const count = new Array(BOX_SIZE + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i][0]]++;
    }
    const result = [];
    let max = 0;
    result.push([max, count[max]])
    for (let i = 1; i < count.length; i++) {
        if (count[max] < count[i]) {
            max = i;
            result.push([max, count[max]]); //max là index, count[max] là số lần xuất hiện
        }
    }
    if (!result.length) {
        return null;
    }
    return result;
}

function getMatch(arr) {
    if (arr instanceof Array) {
        let temp = countSort(arr)
        return temp ? temp[temp.length - 1][0] : null;
    } else {
        return null;
    }
}



// let board = new Board(ctx, shape);
// window.onload = () => {
//     // console.log(mock())
//     board.drawBoard();
//     // setTimeout(() => {
//     //     board.autoScan()
//     // }, 1000);
// }




