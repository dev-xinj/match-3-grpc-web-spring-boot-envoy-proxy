import { useEffect, useRef } from 'react'
import { BoardApi } from '../api/models/BoardApi'
import { GameContext } from '../core/context/GameContext'
import { GameLoop } from '../core/context/GameLoop'
import { EventBus } from '../core/pattern/EventBus'
import { mockCellsAPIWithDefault } from '../example/MockCellApi'
import { Board } from '../models/Board'
import { BoardRenderer } from '../models/BoardRender'
import { Events } from '../enums/Event'

const CANVAS_WIDTH = 720
const CANVAS_HEIGHT = 400
const CELL_SIZE = 40
export const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameContextRef = useRef<GameContext | null>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const handleClick = (e: MouseEvent) => {
      if (!canvas) {
        return
      }
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const column = Math.floor(x / CELL_SIZE)
      const row = Math.floor(y / CELL_SIZE)
      EventBus.publish(Events.ClickedEvent, { row: row, column: column })
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const boardApi: BoardApi = new BoardApi(mockCellsAPIWithDefault())
    const board = new Board(10, 18, boardApi.buildCells(), false) //mockup data contructor = trueconst board = new Board(row, column, boardApi.buildCells(), false) //mockup data contructor = true
    const renderer = new BoardRenderer(board, ctx as CanvasRenderingContext2D)

    canvas?.addEventListener('click', handleClick)
    // Khởi tạo game engine
    gameContextRef.current = new GameContext(renderer)
    const gameLoop = new GameLoop(gameContextRef.current)
    gameLoop.start()
    // Dọn dẹp khi component unmount
    return () => {
      canvas?.removeEventListener('click', handleClick)
      gameLoop.stop()
    }
  }, []) // Chạy một lần khi mount
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <canvas
        // onClick={handleClick}
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ border: '2px solid #000' }}
      />
    </div>
  )
}
