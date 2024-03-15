import React from 'react'
import { useState , useRef } from 'react'

export default function App() {
  const [title1 ,setTitle1] = useState("Js")
  const title2 = useRef("Python")

  const StateBtn = () => {
    setTitle1("React")
  }

  const RefBtn = () => {
    title2.current = "Jango"
    console.log(title2);
  }

  return (
    <div>
    <h1>State : {title1}</h1>
    <h1 ref={title2} >Ref : {title2.current}</h1>
    <button onClick={StateBtn} >State Change</button>
    <button onClick={RefBtn} >Ref Change</button>
    </div>
  )
}
