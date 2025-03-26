import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField'

function App() {
  const [otp, setOtp] = useState(new Array(6).fill(""))
  const inputRefs = useRef([]);
  console.log(inputRefs.current)
  useEffect(() => {
    console.log("Refs after render:", inputRefs.current);
    inputRefs.current[0].focus();
  }, []);
  const handleChange = (index, e) => {
     const value = e.target.value;
     const newOtp = [...otp];
     newOtp[index] = e.target.value;
     setOtp(newOtp);
     if(value && index < 6) {
      console.log(1);
      inputRefs.current[index+1].focus()
     }
  }
  const handleKeyDown = (index,e) => {
    if(e.key === "Backspace" && !otp[index]) {
      inputRefs.current[index-1].focus()
    }
  }
  const handlePaste = (e) => {
   e.preventDefault();
   const pasteData = e.clipboardData.getData("text").trim();
   console.log(pasteData)
   const pasteArray = pasteData.split("");
   console.log(pasteArray)
   if(pasteArray.length === 6) {
    setOtp(pasteArray);
    pasteArray.forEach((char, index) => {
      if(inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
    inputRefs.current[length-1].focus();
   } 
  }
  return (
    <>
      {otp.map((field, index) => (
        <input maxLength={1} onPaste={handlePaste} onKeyDown={(e) => handleKeyDown(index,e)} type="text" ref={(el) => (inputRefs.current[index] = el)} onChange={(e) => handleChange(index, e)}/>
      ))}
    </>
  )
}

export default App
