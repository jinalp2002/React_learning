import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState [ for changing state or UI or data]
  const [length, setLength] = useState(2)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  
  //useCallback [for storing fn in memory and render and call the fn when dependencies are changed]
  const PasswordGenrator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllow) str += "0123456789" 
        if (charAllow) str += "!@#$%^&*-_+=[]{}~`"
        for (let i = 0; i < length; i++) {
          let char = Math.floor(Math.random()*str.length)
          pass += str.charAt(char)
          
        }
        setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])


  //useRef Hook
  const pssref = useRef()

  const CopyPassClip = ()=>{
    pssref.current?.select();
    pssref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }

  //useEffect [execute after render process ]
  useEffect(()=>{
     PasswordGenrator()
  },[length,numberAllow,charAllow])


  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
         <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={pssref}
            />
            <button
            onClick={CopyPassClip} 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
            
            </div>
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range" 
                min={0}
                max={50}
                value={length}
                onChange={(e)=>{setLength(e.target.value)}}
                className='cursor-pointer' />
                <label>Length: {length}</label>
                </div>
                <input
          type="checkbox"
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={() => {
              setNumberAllow((prev) => !prev); // !pre is opposite of pre means prev is true !pre is false
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
                <div className="flex items-center gap-x-1">
                   <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                  setCharAllow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Character</label>
                </div>
                 </div>
            </div>
    </>
  )
}

export default App
