import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, isSetRunning] = useState(false);
  const timerRef = useRef(null)

  useEffect(() => {
    let intervalId;
    if(isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev+1)
      }, 1000)
    }
    return () => {
      console.log('Ruchi')
      clearInterval(intervalId)
    }

  }, [isRunning])

  const handleStart = () => {
    //timerRef.current = setinterval logic
    isSetRunning(true)
  }
  const handlePause = () => {
    //timerRef.current = clearInterval Logic
    isSetRunning(false)
  }
  const handleReset = () => {
    isSetRunning(false);
    setTime(0)
  }

  return (
    <>
    <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
