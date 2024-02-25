import React, { useState } from 'react'
import User from './components/User/User'
import './App.css'

export default function App(){

    const [count,setCount] = useState(0)
    const [users,setUsers] = useState([
        {id:1 , name:"ShM" , age: 23},
        {id:2 , name:"Mahdiye" , age: 23 },
        {id:3 , name:"Shahin" , age: 23 },
        {id:4 , name:"Elvin" , age: 3 }
    ])

    const plusCount = () => {
        setCount(count + 1)
    }
    const minusCount = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <button onClick={plusCount}>+</button>
            <h1>{count}</h1>
            <button onClick={minusCount}>-</button>
            {/* --------------------------------------- */}

            {users.map((user) => 
                <li key={user.id}>name is : {user.name} || age is : {user.age}</li>
             )}
        </div>
    )
}
