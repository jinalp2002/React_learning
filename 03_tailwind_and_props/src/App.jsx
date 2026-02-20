import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'



function App() {
  const [count, setCount] = useState(0)
  

  return (
   <>
   <Card username="Card 1" btn="Click me" />
   <Card username="Card 2" btn="Click me too" />

  </>
    

  )
}

export default App
