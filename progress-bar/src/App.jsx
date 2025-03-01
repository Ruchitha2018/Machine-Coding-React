import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  const barsValue = [5, 10, 15, 20];


  return (
    <>
      {barsValue.map((value) => (

        <ProgressBar progressValue={value} />
      ))}

    </>
  )
}

export default App
