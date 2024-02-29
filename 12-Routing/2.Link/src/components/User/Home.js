import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/about'>Clicked to About</Link>
      <hr />
      <Link to='/contact'>contact</Link>
      <hr />
      <Link to='/user'>user</Link>
    
    </div>

  )
}
