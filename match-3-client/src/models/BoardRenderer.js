import { config, source } from "../constants/config"
import Shape from "./Shape"

const BOX_SIZE = config.ATTRIBUTE.boxSize
export class BoardRenderer {
    constructor(board, ctx) {
        this.board = board
        this.ctx = ctx
        this.cellSize = BOX_SIZE
    }


    loadAll() {
        this.imgMgr = new Shape(source.SOURCE_IMG) //generate image for cell;
        this.imgMgr.loadAll().then(() => {
            this.draw();
        })
    }

    draw() {
        const { ctx, board} = this
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

    click(x, y) {
        const { board } = this
        const col = Math.floor(x / this.cellSize)
        const row = Math.floor(y / this.cellSize)
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

}