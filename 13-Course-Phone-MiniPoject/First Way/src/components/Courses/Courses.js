import React,{useState} from 'react'
import dataCourses from "../DataCourses";
import Course from './Course' 

export default function Courses() {
    const [courses,setCourses] = useState(dataCourses)
  return (
    <div style={{display:"flex" ,justifyContent:"space-around" , marginTop:20}}>

        {
            courses.map(course => (
                <Course key={course.id} {...course}  />
            ))
        }
    </div>
  )
}
