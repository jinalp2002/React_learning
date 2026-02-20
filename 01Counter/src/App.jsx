import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if (count < 10) {
      setCount(count + 1)
    }
    
  }

  const removeValue = () => {
    if (count>0) {
      setCount(count - 1)
    }
  }
  

  return (
    <>
      <h1>Hello React</h1>
      <h3>Count value: {count}</h3>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
