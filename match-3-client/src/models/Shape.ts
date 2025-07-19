import { imageUIType, ImageUIType, TypesImage } from '../constants/ItemUI'
import { TYPECELL } from '../enums/TypeCell'

export default class Shape {
  source: ImageUIType
  images: Record<TypesImage, HTMLImageElement[]>
  constructor(source: ImageUIType) {
    this.source = source
    this.images = {
      NORMAL: [],
      BOOM: [],
      HORIZONTAL: [],
      VERTICAL: []
    }
  }
  async loadAll() {
    for (const key of Object.keys(imageUIType) as TypesImage[]) {
      const paths = this.source[key]
      this.images[key] = await Promise.all(
        paths.map((src) => {
          return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image()
            img.src = src
            img.onload = () => resolve(img)
          })
        })
      )
    }
  }
  get(type: TYPECELL, index: number) {
    return this.images[type]?.[index] || null
  }

  length() {
    return Object.keys(imageUIType).length
  }
}
