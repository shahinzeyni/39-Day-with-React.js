import React from 'react'
import {Routes, Route} from 'react-router-dom'
import User from './components/User/User'
import Posts from './components/Posts'
import MainPost from './components/User/MainPost'
import NotFound from './components/User/NotFound'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<User/>} />
      
      <Route path='/posts' element={<Posts/>} />

      <Route path='/post/:postId' element={<MainPost/>}/>

      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  )
}