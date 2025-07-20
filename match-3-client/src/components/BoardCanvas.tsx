import { useEffect, useRef } from 'react'
import { Board } from '../models/Board'
import { BoardRenderer } from '../models/BoardRender'
import { GamePlay } from '../models/GamePlay.ts'
type Props = {
  config: {
    row: number
    column: number
    boxSize: number
  }
}
const BoardCanvas = ({ config }: Props) => {
  const { row, column } = config
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    const canvas = canvasRef.current
    const board = new Board(row, column, true) //mockup data contructor = true
    const renderer = new BoardRenderer(board, ctx as CanvasRenderingContext2D)

    const gamePlay = new GamePlay(renderer)
    gamePlay.play()
    const handleClick = (e: { clientX: number; clientY: number }) => {
      if (canvas) {
        const rect = canvas.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        gamePlay?.handlePick(mouseX, mouseY)
      }
    }

    canvas?.addEventListener('click', handleClick)

    return () => canvas?.removeEventListener('click', handleClick)
  }, [])

  return <canvas ref={canvasRef} width={720} height={400} />
}
export default BoardCanvas
