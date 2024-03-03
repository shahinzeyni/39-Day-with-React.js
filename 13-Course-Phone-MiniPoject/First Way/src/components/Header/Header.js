import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>ShM</Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{textDecoration:"none" , color:"white",marginLeft:"10px"}}  to="/">Home</Link>
            <Link style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to="/courses">Courses</Link>
            <Link style={{textDecoration:"none" , color:"white",marginLeft:"10px"}} to="/about">About</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
