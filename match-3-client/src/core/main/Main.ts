import { BaseCell } from '../models/BaseCell'
import { CellPosition } from './CellPosition'

export class Main {
  private cells: BaseCell[][]
  private rows: number
  private cols: number
  //private possibleColors" string[]=[]
  constructor(rows: number, cols: number) {
    this.rows = rows
    this.cols = cols
    this.cells = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(null))
    this.initializeMain()
  }
  //Khởi tạo dữ liệu ban đầu cho main
  private initializeMain(): void {}
  //kiểm tra vị trí hợp lệ
  private isValidPosition(position: CellPosition) {}
  private areAdjacent(firstPosCell: CellPosition, secondPosCell: CellPosition): boolean {}

  // Thêm item vào bảng
  public addCell(cell: BaseCell): void {}
  //lấy cell tại vị trí
  public getCellAt(position: CellPosition) {}
  //hoán đổi 2 cell
  public swapCells(firstPosCell: CellPosition, secondPosCell: CellPosition) {}

  //phương thức hỗ trợ skill
  explodeArea(position: CellPosition, radius: number): void {
    console.log(`Xóa cell trong bán kính ${radius} từ (${position.row},${position.col})`)
    //xử lý xóa
  }
  //Phương thức xóa hàng ngang, và hàng dọc
  clearColumn(position: CellPosition): void {
    console.log(`Xóa cột ${position.col}`)
    //xử lý xóa
  }
  clearRow(position: CellPosition): void {
    console.log(`Xóa hàng ${position.row} `)
    //xử lý xóa
  }
  //Phương thức xóa Cell cùng loại
  clearAllCellsOfSameType(position: CellPosition, srcCell: BaseCell): void {
    console.log(`Xóa tất cả item ${srcCell.color} cùng màu với item tại (${position.row}, ${position.col})`)
    // Logic xóa item cùng loại
  }
}
