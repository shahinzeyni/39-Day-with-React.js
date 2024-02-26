import React, { useState,useEffect } from 'react'
import User from './components/User/User'
import './App.css'

export default function App(){

    const [users,setUsers] = useState([
        {id:1 , name:"ShM" , age: 23},
        {id:2 , name:"Mahdiye" , age: 23 },
        {id:3 , name:"Shahin" , age: 23 },
        {id:4 , name:"Elvin" , age: 3 }
    ])

    useEffect(() => {
        console.log("Component Mount");
    },[])

    useEffect(() => {
        console.log('Component Update');
    },[users])  //!==> فقط هنگام تغییر کانت برام آپدیت بشود

    const RemoveHandler = (userId) => {
        setUsers(prevUser => {
            let newUsers = prevUser.filter(user => user.id !== userId)
 
            return newUsers
        })
    }

    return(
        <div>
            {
                users.map(user => (
                    <User key={user.id} {...user}
                    onRemove={RemoveHandler}></User>
                ))
            }
        </div>
    )
}
