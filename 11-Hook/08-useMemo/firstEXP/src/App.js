import React, { useState } from 'react'
import { useMemo } from 'react'
export default function App() {
  const [count1 , setCount1] = useState(0)
  const [count2 , setCount2] = useState(0)

  const addCount1 = () =>{
    setCount1(prev => prev + 1)
  }

  const addCount2 = () =>{
    setCount2(prev => prev + 1)

  }

  const isEven = useMemo(() => {
    let i = 0
    while(i < 2000000000){
      i++
    }
    
    return count1 % 2 === 0
  },[count1])


  return (
    <div>
    <button onClick={addCount1} >Add1</button>
    <span>{count1}</span>
    <br />
    {isEven ? "Even" : "Odd"}
    <br />
    <button onClick={addCount2} >Add2</button>
    <span>{count2}</span>
    </div>
  )
}
