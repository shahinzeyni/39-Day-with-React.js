import React from 'react'
import {useRoutes} from "react-router-dom"
import routers from "./routes";
import TopBar from './Components/TopBar/TopBar';
import SideBar from './Components/SideBar/SideBar';
import "./App.css";

export default function App() {
  let router = useRoutes(routers) 
  return (
    <>
      <TopBar />
      <div className="container">
      <SideBar/>
      {router}
      </div>
    </>
  );
}
