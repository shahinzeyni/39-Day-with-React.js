import React from 'react'
import useCounter from './Components/useCounter'

export default function App() {
  const  [count, addCount, minusCount] = useCounter(0)
  return (
    <div>
        <p>
        {count}
        </p>

        <button onClick={addCount} >Add</button>
        <button onClick={minusCount} >Minus</button>
    </div>
  )
}


