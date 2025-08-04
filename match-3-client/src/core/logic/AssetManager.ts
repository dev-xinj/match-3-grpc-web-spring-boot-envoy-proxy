import { SrcType } from '../../enums/SrcType'
import { CellType } from '../main/CellType'

export class AssetManager {
  private images: Map<CellType, HTMLImageElement[]> = new Map()
  srcImages: Map<string, string> = new Map()
  constructor(pattern: string) {
    this.loadFromGlob(pattern)
  }
  /**
   * Load tất cả hình ảnh từ thư mục (dùng import.meta.glob của Vite)
   * @param pattern - pattern như '../assets/gems/*.png'
   */
  //../assets/items/*.png
  loadFromGlob(pattern: string): void {
    const imageModules = import.meta.glob<string>(pattern, {
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
    for (const path in this.srcImages) {
      if (path.startsWith(SrcType.bomb)) {
        promises.push(this.addImage(CellType.BOMB, this.srcImages.get(path) as string))
      } else if (path.startsWith(SrcType.laser_row)) {
        promises.push(this.addImage(CellType.LASER_ROW, this.srcImages.get(path) as string))
      } else if (path.startsWith(SrcType.laser_col)) {
        promises.push(this.addImage(CellType.LASER_COL, this.srcImages.get(path) as string))
      } else if (path.startsWith(SrcType.same)) {
        promises.push(this.addImage(CellType.SAME, this.srcImages.get(path) as string))
      } else {
        promises.push(this.addImage(CellType.NORMAL, this.srcImages.get(path) as string))
      }
    }
    await Promise.all(promises)
  }
  async addImage(cellType: CellType, src: string) {
    const image = await this.loadImageBySrc(src)
    const values = this.images.get(cellType)!
    if (image != null) {
      values?.push(image)
      this.images.set(cellType, values)
    }
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
    return img[index]
  }
  clear(): void {
    this.images.clear()
  }
}
