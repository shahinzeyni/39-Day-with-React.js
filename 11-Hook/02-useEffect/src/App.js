import React, { useState,useEffect } from 'react'
import User from './components/User/User'
import './App.css'

export default function App(){


    useEffect(() => {
        console.log("Component Mount");
    },[])
    useEffect(() => {
        console.log('Component Update');
    },[count])  //!==> فقط هنگام تغییر کانت برام آپدیت بشود

    
    const plusCount = () => {
        setCount(preventCount => preventCount + 1)
    }
    const minusCount = () => {
        setCount(preventCount => preventCount - 1)
    }

    return(
        <div>
            <button onClick={plusCount}>+</button>
            <h1>{count}</h1>
            <button onClick={minusCount}>-</button>

        </div>
    )
}
