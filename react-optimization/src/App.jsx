import { useState } from 'react'
import './App.css'
import ChildComponent from './Components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({name: 'Ruchi'})
  
  return (
    <>
    {JSON.stringify(count)}
      <button onClick={() => setCount(count+1)}>Click Here</button>
      <ChildComponent data={data}/>
    </>
  )
}

export default App
