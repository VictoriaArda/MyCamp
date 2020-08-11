import React, { Component, useState } from 'react';
import axios from 'axios';
import PaymentModal from './PaymentModal';
import '../components/Style/bottompage.css';
import {Col, Row, Container, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBCard, MDBCardBody, MDBModalFooter, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";

class Payment extends Component {

state ={
  listingInfo: {}
};

componentDidMount () {
  axios({
      "method":"GET",
      "url":`https://airbnb-com.p.rapidapi.com/listing/${this.props.match.params.id}`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"airbnb-com.p.rapidapi.com",
      "x-rapidapi-key":"e9a234de2amshfb394e36da3e9f0p1fe03fjsnda119de32de4",
      "useQueryString":true
      }
      })
      .then((res)=>{
        console.log(res);
        this.setState({listingInfo: res.data.listings})
      })
      .catch((error)=>{
        console.log(error)
      })

}

render() {
  return (<MDBContainer>
    <MDBRow>
<MDBCol lg="4" md="12" className="mb-3">
<img src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg" className="img-fluid z-depth-1" alt="" />
</MDBCol>
<MDBCol lg="4" md="6" className="mb-3">
<img src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg" className="img-fluid z-depth-1" alt="" />
</MDBCol>
<MDBCol lg="4" md="6" className="mb-3">
<img src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg" className="img-fluid z-depth-1" alt="" />
</MDBCol>
</MDBRow>
<MDBRow>
<MDBCol md="6" className="mb-3">
<img src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg" className="img-fluid z-depth-1" alt="" />
</MDBCol>
<MDBCol md="6" className="mb-3">
<img src="https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg" className="img-fluid z-depth-1" alt="" / >
</MDBCol>
</MDBRow>

<MDBCard className="w-60 mb-4">
    <MDBCardBody>
      <MDBCardTitle>Special title treatment</MDBCardTitle>
      <MDBCardText>
        With supporting text below as a natural lead-in to additional
        content.
        <hr></hr>
        With supporting text below as a natural lead-in to additional
        content.
        <hr></hr>
        With supporting text below as a natural lead-in to additional
        content.
        <hr></hr>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
<MDBCard className="w-50 shadow-box-example z-depth-5">
                    <MDBCardBody>
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>
                            <MDBListGroup>
                                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCardText>
                        <MDBBtn color="primary">Payment</MDBBtn>
                    </MDBCardBody>
                    
                </MDBCard>
                      



</MDBContainer>
  )}
};

export default Payment;