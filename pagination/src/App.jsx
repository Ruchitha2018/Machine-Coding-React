import { useState, useEffect } from 'react'
import './App.css'

//https://dummyjson.com/products?limit=100

function App() {

  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  const handleFetchData = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const data = await res.json();
    setTodos(data.products);
    console.log(data);
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  const indexofLastItem = currentPage * 10;
  const indexofFirstItem = indexofLastItem - 10;
  const currentItems = todos.slice(indexofFirstItem, indexofLastItem);

  return (
    <>
    {
      currentItems.map((item, index) => (
        <tr>
          <td>{item.title}</td>
        </tr>
      ))
    }
    {
      [...Array(todos.length/10)].map((_,i) => (
        <span onClick={() => setCurrentPage(i+1)} style={{backgroundColor: currentPage === i+1 ? 'lightblue': 'black'}}>{i+1}</span>
      ))
    }
   
    </>
  )
}

export default App
