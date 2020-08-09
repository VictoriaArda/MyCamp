import React, { Component } from "react";
// import './jumbotron.css';
import "bootstrap/dist/css/bootstrap.css";
import {Jumbotron, Button, Form} from "react-bootstrap";


    function AddYourHome() {
        return (
            <div className="image">
                <div className="container"></div>
                <Jumbotron>
                <h1>Please Register your Home</h1>
                <p>
                    On this page you will be allowed to add your home as a place of stay for your guests!
                </p>
                <p>
                <Button variant="primary">Learn More</Button>
                </p>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group> 
             </Form> 
                </Jumbotron>
            </div>
        );
    }
export default AddYourHome;