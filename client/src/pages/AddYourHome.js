import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Jumbotron, Button, Form} from "react-bootstrap";

    function AddYourHome() {
        return (
            <div className="AddYourHome">
                <div className="container">
                <Jumbotron>
                <h1>Please Register your Home</h1>
                <p>
                    On this page you will be allowed to add your home as a place of stay for your guests!
                </p>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="Name" placeholder="First Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="Name" placeholder="Last Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Location</Form.Label>
    <Form.Control as="select">
      <option>Jersey City</option>
      <option>New York City</option>
      <option>Newark</option>
      <option>Piscataway</option>
      <option>New Brunswick</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select Number of Guests</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group> 
             </Form>
             <Button variant="success">Add Your Home</Button>{' '} 
                </Jumbotron>
                </div>
            </div>

        );
    
    }

export default AddYourHome;