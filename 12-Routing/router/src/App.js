import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/User/Home'
import Contact from './components/User/Contact'
import About from './components/User/About'
import User from './components/User/User'
export default function App() {
  return (
    <>
        {/* <Routes>
            <Route path='/' element={<h1>go to Home </h1>} />
            <Route path='/contact' element={<h1>go to contact </h1>} />
            <Route path='/about' element={<h1>go to about </h1>} />
            <Route path='/user' element={<h1>go to user </h1>} />
        </Routes> */}

        {/* //!----------------------- */}
        
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/user' element={<User/>} />
        </Routes>
    </>
  )
}
