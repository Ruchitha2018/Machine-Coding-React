import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const DATA = [
  {
    id: 1,
    name: 'Walking'
  },
  {
   id: 2,
   name: 'Singing'
  },
  {
    id: 3,
    name: 'Eating'
  }
]
let global = 100;

function App() {
  const [todos, setTodos] = useState(DATA);
  const [value, setValue] = useState('');
  const [showInputField, setShowInputField] = useState(null);

  const addTodo = () => {
    setTodos((prev) => [...prev, { id: --global, name: value}])
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleDelete = (id) => {
    const filerData = todos.filter((item) => item.id !== id);
    setTodos(filerData)
  }

  const handleEdit = () => {
    const updatedTodos = todos.map((todo) => todo.id === showInputField ? {...todo, name:value}: todo);
    setTodos(updatedTodos);
    setShowInputField(null)
  }

  return (
    <>
    {JSON.stringify(todos)}
    <input type="text" onChange={(e) => handleChange(e)} />
    <button onClick={addTodo}>Add Todo</button>
    {todos.map((item, index) => (
      <div>
  
        <p onClick={() => setShowInputField(item.id)}>{showInputField === item.id ? <>
        <input type="text" value={value} onChange={(e) => handleChange(e)}/>
        <button onClick={handleEdit}>Add Edit</button>
        </>:item.name}</p>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    ))}
    </>
  )
}

export default App
