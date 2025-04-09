import { useEffect, useState } from 'react'

import './App.css'
import SliderContent from './components/SliderContent'
import Arrows from './components/Arrows'

const DATA = [
  {
    title: 'First Title',
    description: 'Desc',
    img: 'https://media.istockphoto.com/id/1433055146/photo/bright-modern-office-interior-with-laptop-computer-houseplants-books-and-various-office.jpg?s=2048x2048&w=is&k=20&c=J_RFFJWmnwT-nJa6H3wz3k5kNqznWtMORp6o8MR8y_s='
  },
  {
    title: 'Second Title',
    description: 'Desc',
    img: 'https://media.istockphoto.com/id/1433055146/photo/bright-modern-office-interior-with-laptop-computer-houseplants-books-and-various-office.jpg?s=2048x2048&w=is&k=20&c=J_RFFJWmnwT-nJa6H3wz3k5kNqznWtMORp6o8MR8y_s='
  },
  {
    title: 'Third Title',
    description: 'Desc',
    img: 'https://media.istockphoto.com/id/1433055146/photo/bright-modern-office-interior-with-laptop-computer-houseplants-books-and-various-office.jpg?s=2048x2048&w=is&k=20&c=J_RFFJWmnwT-nJa6H3wz3k5kNqznWtMORp6o8MR8y_s='
  }
]

function App() {

  const [images, setImages] = useState(DATA);
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImg(currentImg === (images.length-1) ? 0:currentImg+1)
    }, 5000);
    return () => clearInterval(interval)

  },[currentImg])

  return (
    <>
     <SliderContent sliderImgs={images} currentImg={currentImg}/>
  <Arrows currentImg={currentImg} setCurrentImg={setCurrentImg}/>
    </>
  )
}

export default App
