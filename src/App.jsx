import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home1 from './components/pages/Home1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home1/>
    </>
  )
}

export default App
