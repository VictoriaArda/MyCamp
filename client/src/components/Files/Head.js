import React from "react";
import {Link}  from 'react-router-dom';
import {Navbar, Nav ,NavDropdown ,Form,FormControl, Button } from "react-bootstrap";
import "../Style/carousel.css";

function Head(){
  return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">MYCAMP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/Contact'} className="nav-link">Contact</Link></li>
                <li><Link to={'/Help'} className="nav-link">Help</Link></li>
                <li><Link to={'/Register'} className="nav-link">Register</Link></li>
                <li><Link to={'/Login'} className="nav-link">Login</Link></li>
                <li><Link to={'/AddYourHome'} className="nav-link">AddYourHometoMyCamp</Link></li>
              </ul>            
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

  );}
export default Head;