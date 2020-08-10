import React from "react";
import {Link}  from 'react-router-dom';
import {Navbar, Nav ,NavDropdown ,Form,FormControl, Button } from "react-bootstrap";
import "../Style/carousel.css";
import logo from "../Files/projectpics/MyCampLogo.png";

function Head(){
  return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">  
          <a>
          <img src={logo} style={{width:100, marginTop: -7}} />
          </a>
          </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
                <ul className="navbar-nav mr-auto">
                  <li><Link to={'/'} className="nav-link"> Home </Link></li>               
                  <li><Link to={'/Register'} className="nav-link">Register</Link></li>
                  <li><Link to={'/Login'} className="nav-link">Login</Link></li>
                </ul>            
                <NavDropdown title="More" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"> <li><Link to={'/Help'} className="nav-link">Help</Link></li></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"><li><Link to={'/Contact'} className="nav-link">Contact</Link></li></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"> <li><Link to={'/Features'} className="nav-link">Features</Link></li></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            <ul className="navbar-nav mr-auto">             
                  <li><Link to={'/AddYourHome'} className="nav-link">AddYourHometoMyCamp</Link></li>               
                </ul>      
          </NavDropdown.Item>       
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