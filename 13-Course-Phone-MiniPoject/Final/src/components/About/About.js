import React from 'react'
import { Link ,Outlet,useNavigate } from "react-router-dom"

export default function About() {
  let navigate = useNavigate()

  return (
    <div>
    <button onClick={ () => {
      navigate('/login')
    }} >Sign Up</button>
        <h3  style={{textAlign:'center'}}>Welcome to About Page</h3>
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <Link to="setting">Setting</Link>
            <Link to="dashboard">Dashboard</Link>
        </div>
        <hr />
        <Outlet />
    </div>
  )
}