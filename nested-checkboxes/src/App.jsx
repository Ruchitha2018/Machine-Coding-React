import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NestedCheckbox from './Components/NestedCheckbox'

const DATA = [
  {
    id: 1,
    name: 'Fruits',
    checked: false,
    children: [{
      id: 2,
      name: 'Mango',
      checked: false
    },
    {
      id: 3,
      name: 'Apple',
      checked: false
    },
    {
      id: 4,
      name: 'Strawberry',
      checked: false,
      children: [
        {
          id: 5,
          name: 'Mango',
          checked: false
        },
        {
          id: 6,
          name: 'Apple',
          checked: false
        },
      ]
    }
    ]
  }
]

function App() {
  const [data, setData] = useState(DATA)

  return (
    <ul>
    {data.map((item, index) => (
      <NestedCheckbox childrenData={item} />
    ))}
    </ul>
  )
}

export default App
