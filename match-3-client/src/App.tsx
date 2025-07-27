import './App.css'
import BoardCanvas from './components/BoardCanvas'
import { GameCanvas } from './components/GameCanvas'
import { config } from './constants/config'

function App() {
  return (
    <>
      <div className='game'>
        <div className='score-box'>
          Score: <div id='score'>0</div>
        </div>
        <div className='canvas-frame'>
          {/* config={config.ATTRIBUTE} */}
          <GameCanvas ></GameCanvas>
        </div>
      </div>
    </>
  )
}

export default App
