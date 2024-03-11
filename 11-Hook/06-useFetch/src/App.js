import React from 'react'
import useFetch from './Components/useFetch'

export default function App() { 
  
  const {posts , isPending , error} = useFetch("https://jsonplaceholder.typicode.com/posts")


  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ... </div>}

      {posts && posts.map((post) => (
        <>
          <h2>{post.title}</h2>
        </>
      ))}
    </div>
  );
}


