import './App.css'
import { GameCanvas } from './components/GameCanvas'

function App() {
  return (
    <>
      <div className='game'>
        <div className='score-box'>
          Score: <div id='score'>0</div>
        </div>
        <div className='canvas-frame'>
          <GameCanvas></GameCanvas>
          {/* <BoardCanvas config={config.ATTRIBUTE}></BoardCanvas> */}
        </div>
      </div>
    </>
  )
}

export default App
