import React, { useState } from 'react';
import "../Style/carousel.css";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Button from "./Button";




<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/Contact'} className="nav-link">Contact</Link></li>
                <li><Link to={'/Help'} className="nav-link">Help</Link></li>
                <li><Link to={'/Register'} className="nav-link">Register</Link></li>
                <li><Link to={'/Login'} className="nav-link">Login</Link></li>
                <li><Link to={'/AddYourHome'} className="nav-link">AddYourHometoMyCamp</Link></li>
                <li><Link to={'/Results'} className="nav-link">Results</Link></li>
              </ul>
              </nav>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


export default Navbar;