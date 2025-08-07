import { CellPosition } from '../../../main/CellPosition'
import { CellType } from '../../../main/CellType'
import { ComboType } from '../../../main/ComboType'
import { SpecialCell } from '../../../models/SpecialCell'
import { DestroyWithBombSkill } from '../combo/DestroyWithBombSkill'
import { DestroyWithLaserSkill } from '../combo/DestroyWithLaserSkill'
import { DoubleBombSkill } from '../combo/DoubleBombSkill'
import { DoubleDestroySkill } from '../combo/DoubleDestroySkill'
import { DoubleLaserSkill } from '../combo/DoubleLaserSkill'
import { LaserWithBombSkill } from '../combo/LaserWithBombSkill'
import { ComboSkillStrategy } from '../ComboSkillStrategy'

export class ComboSkillManager {
  private rules: Map<ComboType, ComboSkillStrategy> = new Map()
  constructor() {
    // Đăng ký quy tắc kết hợp trực tiếp trong constructor
    this.registerRule(CellType.BOMB, CellType.BOMB, new DoubleBombSkill())
    this.registerRule(CellType.LASER, CellType.BOMB, new LaserWithBombSkill())
    this.registerRule(CellType.LASER, CellType.LASER, new DoubleLaserSkill())
    this.registerRule(CellType.DESTROY, CellType.BOMB, new DestroyWithBombSkill())
    this.registerRule(CellType.DESTROY, CellType.LASER, new DestroyWithLaserSkill())
    this.registerRule(CellType.DESTROY, CellType.DESTROY, new DoubleDestroySkill())
  }
  /* Đăng ký rule đề quản lý */
  private registerRule(firstType: CellType, secondType: CellType, combo: ComboSkillStrategy): void {
    const key = this.defineCombo(firstType, secondType)
    this.rules.set(ComboType[ComboType[key]], combo)
  }
  /* Nhận hai cell đặc biệt và xử lý kỹ năng tương ứng */
  public handleCombo(
    firstCell: SpecialCell,
    secondCell: SpecialCell,
    callback: (firstCell: SpecialCell, secondCell: SpecialCell, comboType: ComboType) => CellPosition[]
  ): CellPosition[] {
    const key1 = this.defineCombo(firstCell.type, secondCell.type)
    const key2 = this.defineCombo(secondCell.type, firstCell.type)
    let temp = key1 /* Lưu trữ key dùng được */
    let rule = this.rules.get(ComboType[ComboType[key1]])
    if (!rule) {
      rule = this.rules.get(ComboType[ComboType[key2]])
      temp = key2
    }
    if (rule) {
      return rule.execute(firstCell, secondCell, temp, callback)
    } else {
      console.log('Combo Skill >>>> NOT FOUND')
    }
    return []
  }
  /* Format kiểu Laser_row hoặc laser_column thành laser */
  private formatCellType(cellType: CellType): CellType {
    if (cellType === CellType.LASER) {
      return cellType
    } else if (cellType.startsWith(CellType.LASER)) {
      return CellType.LASER
    } else {
      return cellType
    }
  }
  /* định nghĩa lại key cho rule */
  private defineCombo(firstType: CellType, secondType: CellType): ComboType {
    return `${this.formatCellType(firstType)}_${this.formatCellType(secondType)}` as ComboType
  }
}
