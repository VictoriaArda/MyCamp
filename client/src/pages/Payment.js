import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Payment extends Component {
state = {
  modal13: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
  <MDBContainer>
      <MDBBtn color="primary" onClick={this.toggle(13)}>
        Payment Info
      </MDBBtn>
      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
        <MDBModalHeader toggle={this.toggle(13)}>
          Modal title
        </MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(13)}>
            Close
          </MDBBtn>
          <MDBBtn color="secondary" onClick={this.toggle(13)}>
            Enter Your Card Info
          </MDBBtn>
          <MDBBtn color="primary">Pay Later</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default Payment;