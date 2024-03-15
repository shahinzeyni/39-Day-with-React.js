import React, { useEffect } from 'react'
import { useState , useRef } from 'react'

export default function App() {
  const [title1 ,setTitle1] = useState("")

  const renderCount = useRef(1)

  useEffect(()=>{
    // setRenderCount(prev => prev + 1 )
    renderCount.current += 1
  })


  return (
    <div>
      <input
        type="text"
        value={title1}
        onChange={(e) => setTitle1(e.target.value)}
        />

      <h1>Input Value: {title1}</h1>
      <h1>Ref : {renderCount.current}</h1>


    </div>
  );
}
