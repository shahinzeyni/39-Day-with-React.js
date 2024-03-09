import Home from './components/Home/Home'
import Courses from './components/Courses/Courses'
import MainCourses from './components/MainCourses/MainCourses'
import About from './components/About/About'
import Login from './components/Login/Login'
import Panel from './components/Panel/Panel'
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes'


let routes = [
  {path:"/home" , element: <Home/>},
  { path: "/courses", element: <Courses /> },
  { path: "/course/:courseId", element: <MainCourses /> },
  {
    path: "/about/*",
    element: <About />,
    children: [
      { path: "dashboard", element: <h1>Dashboard Clicked! </h1> },
      { path: "setting", element: <h1>Setting Clicked!</h1> }
    ]
  },
  {path:"/*" , element: <PrivateRoutes/> , children:[
    {path:"panel" , element: <Panel/>},
    {path:"login" , element: <Login/>}
  ]}
];

export default routes