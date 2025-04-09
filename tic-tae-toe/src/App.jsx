import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [grids, setGrids] = useState(Array(3*3).fill(''));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(grids);

  const handleChange = (index) => {
    const newGrids = [...grids];

      if(isXNext) {
        newGrids[index] = 'X'
        console.log(newGrids)
        setIsXNext(false);
      } else {
        newGrids[index] = 'O'
        setIsXNext(true);
      }
      setGrids(newGrids)
  }

  const status = winner ? 'A' : 'B'


  return (
    <div className="grid-container">
      {status}
    {grids.map((item, index) => (
      <div className="grid" onClick={() => handleChange(index)}>{JSON.stringify(item)}</div>
    ))}
    </div>
  )
}

export default App

const calculateWinner = (board) => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
  ]
  for(let [a,b,c] of lines) {
    if(board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
