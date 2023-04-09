import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app-body h-screen grid grid-cols-12 grid-rows-6 max-w-7xl">
        <Sidebar />
        <Body />
      </div>
  )
}

export default App
