type Effect = {
  x: number
  y: number
  frame: number
  maxFrame: number
  draw: (ctx: CanvasRenderingContext2D, cellSize: number) => void
  done: boolean
}
