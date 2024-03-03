import Courses from './components/Courses/Courses'
import MainCourses from './components/MainCourses/MainCourses'
import About from './components/About/About'

let routes = [
  { path: "/courses", element: <Courses /> },
  { path: "/course/:courseId", element: <MainCourses /> },
  {
    path: "/about/*",
    element: <About />,
    children: [
      { path: "dashboard", element: <h1>Dashboard Clicked! </h1> },
      { path: "setting", element: <h1>Setting Clicked!</h1> }
    ]
  }
];

export default routes