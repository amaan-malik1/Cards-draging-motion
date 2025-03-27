import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {

  return (
    <div className="bg-zinc-800 w-full h-screen relative">
      <Background />
      <Foreground />
    </div>
  )
}

export default App
