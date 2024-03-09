import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import { Link ,NavLink } from 'react-router-dom';
import "./Header.css";


export default function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>ShM</Navbar.Brand>
          <Nav className="me-auto">
              <NavLink style={{textDecoration:"none" , color:"white",marginLeft:"10px"}}  to="/home"
              className={(link) => link.isActive ? "active" : ""}
              >Home</NavLink>
              <NavLink style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to="/courses">Courses</NavLink>
              <NavLink style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to="/about">About</NavLink>
              <NavLink style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to='/panel'>Panel</NavLink>
              <NavLink style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to="/login">Login</NavLink>





          {/* --------------------------*Link*---------------- */}
            {/* <Link style={{textDecoration:"none" , color:"white",marginLeft:"10px"}}  to="/home">Home</Link>
            <Link style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to="/courses">Courses</Link>
            <Link style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to="/about">About</Link>
            <Link style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to='/panel'>Panel</Link>
            <Link style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to="/login">Login</Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
