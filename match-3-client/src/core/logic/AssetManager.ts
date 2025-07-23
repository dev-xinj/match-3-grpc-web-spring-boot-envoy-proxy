// export class AssetManager {
//   private images: Map<string, HTMLImageElement> = new Map()

//   /**
//    * Load tất cả hình ảnh từ thư mục (dùng import.meta.glob của Vite)
//    * @param pattern - pattern như '../assets/gems/*.png'
//    */

//   async loadFromGlob(pattern: string): Promise<void> {
//     const imageModules = import.meta.glob<string>(pattern, {
//       eager: true,
//       import: 'default'
//     })

//     const promises: Promise<void>[] = []

//     for (const path in imageModules) {
//       const src = imageModules[path] as string
//       const key = this.extractKeyFromPath(path)
//       promises.push(this.loadImage(key, src))
//     }

//     await Promise.all(promises)
//   }
//   private extractKeyFromPath(path: string): string {
//     const parts = path.split('/')
//     const fileName = parts[parts.length - 1]
//     return fileName.split('.')[0] // gem_red.png → gem_red
//   }
//   private async loadImage(key: string, src: string): Promise<void> {
//     if (this.images.has(key)) return

//     const img = new Image()
//     img.src = src

//     await new Promise<void>((resolve, reject) => {
//       img.onload = () => resolve()
//       img.onerror = () => reject(`Failed to load ${src}`)
//     })

//     this.images.set(key, img)
//   }
//   getImage(key: string): HTMLImageElement {
//     const img = this.images.get(key)
//     if (!img) throw new Error(`Image "${key}" not found`)
//     return img
//   }
//   clear(): void {
//     this.images.clear()
//   }
// }
