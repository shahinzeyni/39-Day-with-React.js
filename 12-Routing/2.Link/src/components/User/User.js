import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
  return <div>
      <h1>User</h1>
      <Link to="/about">Clicked to About</Link>
      <hr />
      <Link to="/contact">contact</Link>
      <hr />
      <Link to="/user">user</Link>
    </div>;
}
