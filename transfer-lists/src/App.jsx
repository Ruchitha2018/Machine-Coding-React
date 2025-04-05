import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const DATA = [
  {
    id: 1,
    name: 'Item 1'
  },
  {
    id: 6,
    name: 'Item 6'
  },
  {
    id: 2,
    name: 'Item 2'
  },
  {
    id: 3,
    name: 'Item 3'
  },
  {
    id: 4,
    name: 'Item 4'
  },
  {
    id: 5,
    name: 'Item 5'
  }
]
function App() {
  const [leftItems, setLeftItems] = useState(DATA);
  const [rightItems, setRightItems] = useState([])
   /***Another logic */
  // const handleRightItems = (item) => {
  //   setRightItems((prev) => prev.filter((filterItem) => filterItem.id !== item.id));
  //   setLeftItems((prev) => [...prev, item])

  // }
  // const handleLeftItems = (item) => {
  //   setLeftItems((prev) => prev.filter((filterItem) => filterItem.id !== item.id));
  //   setRightItems((prev) => [...prev, item])
  // }

  const handleItems = (fromList, toList, item) => {
      fromList((prev) => prev.filter((filterItem) => filterItem.id !== item.id))
      toList((prev) => [...prev, item])
  }
  return (
    <>
     <div className="left-items">
      {leftItems.map((item, index) => (
        <button onClick={() => handleItems(setLeftItems, setRightItems, item)}>{item.name}</button>
      ))}
     </div>
     <div className="right-items">
      {rightItems.map((item, index) => (
        <button onClick={() => handleItems(setRightItems, setLeftItems, item)}>{item.name}</button>
      ))}
     </div>
    </>
  )
}

export default App
