import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import MainCourses from './components/MainCourses/MainCourses'
import About from './components/About/About'


export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:courseId" element={<MainCourses />} />

        <Route path="/about" element={<About />}>
          <Route path="dashboard" element={<h1>Dashboard Clicked! </h1>} />
          <Route path="setting" element={<h1>Setting Clicked!</h1>} />
        </Route>
      </Routes>
    </>
  );
}