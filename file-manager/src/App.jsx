import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FolderComponent from './Components/FolderComponent'

const DATA = [
  {
    id: 1,
    name: 'Folder 1',
    children: [
      {
        id: 2,
        name: 'FileName.txt',
      },
      {
        id: 3,
        name: 'Folder 2',
        children : [
          {
            id: 4,
            name: 'FileName2.txt'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    name: 'Folder 1',
    children: [
      {
        id: 2,
        name: 'FileName.txt',
      },
      {
        id: 3,
        name: 'Folder 2',
        children : [
          {
            id: 4,
            name: 'FileName2.txt'
          }
        ]
      }
    ]
  }
]
function App() {

  const [fileManager, setFileManager] = useState(DATA);

  return (
    <ul>
    {fileManager.map((fileItem, index) => (
      <FolderComponent childrenData={fileItem}/>
    ))}
    </ul>
  )
}

export default App
