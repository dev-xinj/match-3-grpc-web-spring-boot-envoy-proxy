// Tự động import tất cả ảnh từ thư mục
const images: Record<string, string> = import.meta.glob('../assets/items/*.png', {
  eager: true,
  import: 'default'
})
const imageMap: Record<string, string> = {}
// Tạo map key → src
for (const path in images) {
  const fileName = path.split('/').pop() // lấy tên file
  if (fileName) {
    imageMap[fileName] = images[path] // gán file name → url
  }
}

export const imageUIType: ImageUIType = {
  NORMAL: [
    imageMap['diamond0.png'],
    imageMap['diamond1.png'],
    imageMap['diamond2.png'],
    imageMap['diamond3.png'],
    imageMap['diamond4.png'],
    imageMap['diamond5.png']
  ],
  BOOM: [
    imageMap['diamond0.png'],
    imageMap['diamond_boom1.png'],
    imageMap['diamond_boom2.png'],
    imageMap['diamond_boom3.png'],
    imageMap['diamond_boom4.png'],
    imageMap['diamond_boom5.png']
  ],
  HORIZONTAL: [
    imageMap['diamond0.png'],
    imageMap['diamond_hori1.png'],
    imageMap['diamond_hori2.png'],
    imageMap['diamond_hori3.png'],
    imageMap['diamond_hori4.png'],
    imageMap['diamond_hori5.png']
  ],
  VERTICAL: [
    imageMap['diamond0.png'],
    imageMap['diamond_verti1.png'],
    imageMap['diamond_verti2.png'],
    imageMap['diamond_verti3.png'],
    imageMap['diamond_verti4.png'],
    imageMap['diamond_verti5.png']
  ],
  DESTROY: [imageMap['diamond_all.png']]
}

export type TypesImage = 'NORMAL' | 'BOOM' | 'HORIZONTAL' | 'VERTICAL' | 'DESTROY'

export type ImageUIType = {
  [type in TypesImage]: string[]
}
