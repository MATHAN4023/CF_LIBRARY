import { useState } from 'react'
import './App.css'
import MiniDrawer from './Component/Side-Bar/Minivariantdrawer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MiniDrawer/>
    </>
  )
}

export default App
