import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Jumbotron, Button, Form } from "react-bootstrap";
import "../components/Style/jumbotron.css";
import Head from "../components/Files/Head";

class AddYourHome extends Component {
  state = {
    firstName: "",
    lastName: "",
    location: "",
    guestNum: ""
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "",
      location: "",
      guestNum: ""
    });
  };
  render() {
    return (<div className="AddYourHome">
      <div className="container">
        <Head></Head>
        <Jumbotron>
          <h1>Please Register your Home</h1>
          <p>
            On this page you will be allowed to add your home as a place of stay for your guests!
                </p>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Location</Form.Label>
              <Form.Control
                value={this.state.location}
                name="location"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Location" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Number of Guests</Form.Label>
              <Form.Control
                value={this.state.guestNim}
                name="guestNum"
                onChange={this.handleInputChange}
                type="number"
                placeholder="# of Guests" />
            </Form.Group>
          </Form>
          <Button onClick={this.handleFormSubmit} variant="success">Add Your Home</Button>{' '}
        </Jumbotron>
      </div>
    </div>
    );
  }
}

export default AddYourHome;