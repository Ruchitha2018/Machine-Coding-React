import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from "./context/ThemeContext"


function App() {
 const { theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
      {theme}
      <button onClick={toggleTheme}>Change Theme</button>
    </>
  )
}

export default App
