import { useEffect, useRef, useState } from 'react'
import { GameContext } from '../core/context/GameContext'
import { BoardRenderer } from '../models/BoardRender'
import { BoardApi } from '../api/models/BoardApi'
import { mockCellsAPIWithDefault } from '../example/MockCellApi'
import { Board } from '../models/Board'
import { GamePlay } from '../models/GamePlay'
import { Pair } from '../types/Pair'
import { EventBus } from '../core/pattern/EventBus'

const CANVAS_WIDTH = 720
const CANVAS_HEIGHT = 400
const CELL_SIZE = 40
export const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameContextRef = useRef<GameContext | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [selectedGem, setSelectedGem] = useState<Pair | null>(null)

  // const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
  //   if (!canvasRef.current || !gameContextRef.current) return

  //   const rect = canvasRef.current.getBoundingClientRect()
  //   const x = e.clientX - rect.left
  //   const y = e.clientY - rect.top
  //   console.log('.....')
  //   const column = Math.floor(x / CELL_SIZE)
  //   const row = Math.floor(y / CELL_SIZE)

  //   if (row >= 0 && row < 10 && column >= 0 && column < 18) {
  //     const clickedPos: Pair = { row, column }
  //     if (selectedGem) {
  //       // Thực hiện swap
  //       EventBus.publish('SwapEvent', [selectedGem, clickedPos])
  //       setSelectedGem(null)
  //     } else {
  //       // Lưu vị trí viên ngọc được chọn
  //       setSelectedGem(clickedPos)
  //     }
  //   }
  // }
  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !gameContextRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const column = Math.floor(x / CELL_SIZE)
    const row = Math.floor(y / CELL_SIZE)
    if (row >= 0 && row < 10 && column >= 0 && column < 18) {
      const clickedPos: Pair = { row, column }
      if (selectedGem) {
        // Thực hiện swap
        EventBus.publish('SwapEvent', [selectedGem, clickedPos])
        setSelectedGem(null)
      } else {
        // Lưu vị trí viên ngọc được chọn
        setSelectedGem(clickedPos)
      }
    }
  }
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    // const handleClick = (e: MouseEvent) => {
    //   if (!canvas || !gamePlay) {
    //     return
    //   }
    //   const rect = canvas.getBoundingClientRect()
    //   const mouseX = e.clientX - rect.left
    //   const mouseY = e.clientY - rect.top
    //   gamePlay.handlePick(mouseX, mouseY)
    // }
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const boardApi: BoardApi = new BoardApi(mockCellsAPIWithDefault())
    const board = new Board(10, 18, boardApi.buildCells(), false) //mockup data contructor = trueconst board = new Board(row, column, boardApi.buildCells(), false) //mockup data contructor = true
    const renderer = new BoardRenderer(board, ctx as CanvasRenderingContext2D)
    // canvas?.addEventListener('click', handleClick)
    // Khởi tạo game engine
    gameContextRef.current = new GameContext(renderer, () => renderer.loadAll(), ctx)
    gameContextRef.current.start()

    // Dọn dẹp khi component unmount
    return () => {
      // canvas?.removeEventListener('click', handleClick)
      gameContextRef.current?.stop()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, []) // Chạy một lần khi mount
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <canvas
        onClick={handleClick}
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ border: '2px solid #000' }}
      />
    </div>
  )
}
