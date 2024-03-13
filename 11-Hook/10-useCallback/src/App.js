import React, { memo, useCallback, useState } from 'react'

export default function App() {
  const [title,setTitle] = useState("")
  const [counter,setCounter] = useState(0)

  const addHandler = useCallback(() => {
    setCounter(prev => prev + 1)
  },[counter])

  const minusHandler = useCallback(() => {
      setCounter((prev) => prev - 1);
    },[counter])

  console.log('App');
  return (
    <div>
    <Title titleInp={title} />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <hr />

      <h1>{counter}</h1>

    <Button addBtn={addHandler} minusBtn={minusHandler} />

    </div>
  );
}

const Title = memo(({titleInp}) => {
  console.log("Title");
  return <h1>{titleInp}</h1>;
})

const Button = memo(({addBtn,minusBtn}) => {
    console.log('Button');
    return(
      <>
      <button onClick={addBtn} >Add</button>
      <button onClick={minusBtn} >Min</button>
      </>
      )
  }
)