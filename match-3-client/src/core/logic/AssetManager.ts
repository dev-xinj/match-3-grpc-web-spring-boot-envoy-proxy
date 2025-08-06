import { CellName } from '../../enums/CellName'
import { SrcType } from '../../enums/SrcType'
import { CellType } from '../main/CellType'
// import {laser} from '../../assets'
export class AssetManager {
  private images: Map<CellType, Map<CellName, HTMLImageElement>> = new Map()
  srcImages: Map<string, string> = new Map()
  constructor(pattern: string) {
    this.loadFromGlob(pattern)
  }
  /**
   * Load tất cả hình ảnh từ thư mục (dùng import.meta.glob của Vite)
   * @param pattern - pattern như '../assets/gems/*.png'
   */
  //../assets/items/*.png
  private loadFromGlob(pattern: string): void {
    const imageModules: Record<string, string> = import.meta.glob('../../assets/temp/*.png', {
      eager: true,
      import: 'default'
    })
    /* Split đường dẫn để lấy fileName làm key và lưu trữ vào map */
    for (const path in imageModules) {
      const fileName = path.split('/').pop() // lấy tên file
      if (fileName) {
        this.srcImages.set(fileName, imageModules[path]) // gán file name → url
      }
    }
  }
  /* Phân loại images */
  async loadAll() {
    const promises: Promise<void>[] = []
    for (const path of this.srcImages) {
      if (path[0].startsWith(SrcType.bomb)) {
        promises.push(this.addImage(CellType.BOMB, path[1]))
      } else if (path[0].startsWith(SrcType.laser_row)) {
        promises.push(this.addImage(CellType.LASER_ROW, path[1]))
      } else if (path[0].startsWith(SrcType.laser_col)) {
        promises.push(this.addImage(CellType.LASER_COL, path[1]))
      } else if (path[0].startsWith(SrcType.DESTROY)) {
        promises.push(this.addImage(CellType.DESTROY, path[1]))
      } else {
        promises.push(this.addImage(CellType.NORMAL, path[1]))
      }
    }
    await Promise.all(promises)
  }
  async addImage(cellType: CellType, src: string) {
    const image = await this.loadImageBySrc(src)

    if (image === null) {
      return
    }
    const values = this.images.get(cellType) ?? new Map<CellName, HTMLImageElement>()
    const endsSrc = src.split('/').pop()?.split('.')[0]
    for (const name of Object.values(CellName)) {
      if (endsSrc?.endsWith(name.toString().toLowerCase())) {
        values.set(name as CellName, image)
        break
      }
    }
    // values.push(image)
    this.images.set(cellType, values)
    // }
  }
  loadImageBySrc(src: string): Promise<HTMLImageElement | null> {
    if (src) {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve(img)
        img.onerror = () => reject(`Failed to load ${src}`)
      })
    } else {
      return Promise.resolve(null)
    }
  }
  getImageByTypeAndIndex(cellType: CellType, index: number): HTMLImageElement {
    const img = this.images.get(cellType)
    if (!img) throw new Error(`Image "${cellType}" not found`)
    const keys = Object.values(CellName)
    const key = keys[index]
    if (!key) throw new Error(`Image "${key}" not found`)
    return img.get(keys[index] as CellName)
  }
  clear(): void {
    this.images.clear()
  }
  public length() {
    return this.images.size
  }
}
