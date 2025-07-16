import { useEffect, useRef } from "react"
import { Board } from "../models/Board"
import { BoardRenderer } from "../models/BoardRenderer"
import { GamePlay } from "../models/GamePlay";

const BoardCanvas = ({ config }) => {
    const { row, column } = config;
    const canvasRef = useRef(null)

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d')
        const canvas = canvasRef.current;
        const board = new Board(row, column, true); //mockup data contructor = true

        const renderer = new BoardRenderer(board, ctx)
        renderer.loadAll();
        const gamePlay = new GamePlay(renderer);
        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect()
            const mouseX = e.clientX - rect.left
            const mouseY = e.clientY - rect.top
            // renderer?.click(mouseX, mouseY)
            gamePlay?.handlePick(mouseX, mouseY)

            // console.log(Math.floor(mouseX / 40), Math.floor(mouseY / 40))
        }

        canvas.addEventListener('click', handleClick)

        return () => canvas.removeEventListener('click', handleClick)
    }, [])

    return <canvas ref={canvasRef} width={720} height={400} />
}
export default BoardCanvas;
