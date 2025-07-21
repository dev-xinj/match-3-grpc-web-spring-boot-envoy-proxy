import { useEffect, useRef } from 'react'
import { BoardApi } from '../api/models/BoardApi.ts'
import { Board } from '../models/Board'
import { BoardRenderer } from '../models/BoardRender'
import { GamePlay } from '../models/GamePlay.ts'
import { generateBoard } from '../services/BoardService.ts'
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
    let gamePlay: GamePlay | null = null

    const handleClick = (e: MouseEvent) => {
      if (!canvas || !gamePlay) {
        return
      }
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      gamePlay.handlePick(mouseX, mouseY)
    }
    const fetchData = async () => {
      try {
        const result = await generateBoard(row, column)
        const boardApi: BoardApi = Object.setPrototypeOf(result, BoardApi.prototype)
        const board = new Board(row, column, boardApi.buildCells(), false) //mockup data contructor = true
        const renderer = new BoardRenderer(board, ctx as CanvasRenderingContext2D)
        gamePlay = new GamePlay(renderer)
        gamePlay.play()
        canvas?.addEventListener('click', handleClick)
      } catch (err) {
        console.error('Error initializing game:', err)
      }

      // return result
      return () => canvas?.removeEventListener('click', handleClick)
    }
    fetchData()
  }, [row, column])

  return <canvas ref={canvasRef} width={720} height={400} />
}
export default BoardCanvas
