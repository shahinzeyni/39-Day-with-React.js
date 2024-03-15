import React, { useEffect, useRef } from 'react'
import './App.css';

export default function App() {
  const inpRef = useRef()
  const titleRef = useRef()


  useEffect(() => {
    console.log(inpRef);
    inpRef.current.focus()
  },[])


  const btn1 = () => {
    titleRef.current.classList.add('color-green')
    inpRef.current.classList.add('color-blue')
  } 

  const addNewValue = () => {
    inpRef.current.value = "Shahhin & Mahdiye"
  }
  return (
    <div>
      <h1 ref={titleRef} >Shahin @ Mahdiye</h1>
      <button  onClick={btn1} >Change Title</button>
      <input type="text" ref={inpRef} />
      <button onClick={addNewValue} >Add New Note</button>
    </div>
  )
}
