import { useCallback, useMemo, useState } from 'react'
import './App.css'
import ChildComponent from './Components/ChildComponent'

const ExpensiveCalculation = (num) => {
  console.log('Calculation')
    return num*2;
}
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({name: 'Ruchi'})
  const [number, setNumber] = useState(0)

  // const doubled = useMemo(() => ExpensiveCalculation(number), [number])

  const handleClick = useCallback(() => {
    console.log('CLicked Here')
    setCount((prev) => prev+1)
  },[])

  
  return (
    <>
      <button onClick={handleClick}>Click Here</button>
      {/* <button onClick={() => setNumber(number+1)}>Click Number</button> */}
      <ChildComponent  onClick={handleClick}/>
    </>
  )
}

export default App
