import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TrafficData = [
  {
    color: 'red', 
    seconds: 5000, 
    next: 'yellow'
  },
  {
    color: 'yellow',
    seconds: 1000,
    next: 'red'
  },
  {
    color: 'green',
    seconds: 3000,
    next: 'yellow'
  }
]

function App() {
  const [currentColor, setCurrentColor] = useState('red');

  useEffect(() => {
    const currentData = TrafficData.find(item => item.color === currentColor)
    console.log(currentData)
    const intervalId = setTimeout(() => {
        setCurrentColor(currentData.next)
      }, currentData?.seconds)
      return () => {
        clearTimeout(intervalId)
      }
  },[currentColor])
  return (
    <>
    <h1>{JSON.stringify(currentColor)}</h1>
      {TrafficData.map((data, index) => (
        <div className={`traffic-light ${data.color === currentColor ? data.color : 'blue'}`}>
          
        </div>
      ))}
    </>
  )
}

export default App
