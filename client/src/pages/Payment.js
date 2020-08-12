import React, { Component, useState } from "react";
import axios from "axios";
import "../components/Style/payment.css"
import Head from "../components/Files/Head";
import Daterange from '../components/Files/Daterange'
import "../components/Style/bottompage.css";
import {
  Col,
  Row,
  Container,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import {
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";

class Payment extends Component {
  state = {
    listingInfo: {},
  };

  componentDidMount() {
    axios({
      method: "GET",
      url: `https://airbnb-com.p.rapidapi.com/listing/${this.props.match.params.id}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "airbnb-com.p.rapidapi.com",
        "x-rapidapi-key": "e9a234de2amshfb394e36da3e9f0p1fe03fjsnda119de32de4",
        useQueryString: true,
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({ listingInfo: res.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //var food = "apple"

    //let hungry = food === "apple" ? false : true
  }

  render() {
    const myStyle = {
    height: "300px",
    minWidth: "100%",
    borderRadius: "4px",
    padding: "10px"
    }
    const myStyle2 ={
    height: "500px",
    minWidth: "100%",
    borderRadius: "4px",
    padding: "10px"

    }
    return (
      <MDBContainer>
        <MDBContainer>
          <Head/>
        </MDBContainer>
        {/* {if(this.state.listingInfo.photos) return (<h1>sup</h1>)} */}
        {this.state.listingInfo.photos ? (
          <>
            <MDBRow>
              <MDBCol lg="4" md="12" className="mb-3">
                <img style={myStyle}
                  src={this.state.listingInfo.photos[0].large}
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
              <MDBCol lg="4" md="6" className="mb-3">
                <img style={myStyle}
                  src={this.state.listingInfo.photos[1].large}
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
              <MDBCol lg="4" md="6" className="mb-3">
                <img style={myStyle}
                  src={this.state.listingInfo.photos[2].large}
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="mb-3">
                <img style={myStyle2}
                  src={this.state.listingInfo.photos[5].large}
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <img style={myStyle2}
                  src={this.state.listingInfo.photos[6].large}
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md="6" className="mb-3">

            <MDBCard className="w-60 mb-4">
              <MDBCardBody>
                <MDBCardTitle>{this.state.listingInfo.sectioned_description.name}</MDBCardTitle>
                
                <MDBCardText>
                  <strong>Number of Guests:</strong> {this.state.listingInfo.guest_label}
                  <hr></hr>
                  <strong>Description:</strong> {this.state.listingInfo.sectioned_description.summary}
                  <hr></hr>
                  <strong>Check In Time:</strong>{this.state.listingInfo.localized_check_in_time_window}
                  <strong>Check Out Time:</strong>{this.state.listingInfo.localized_check_out_time}
                  <hr></hr>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
            <MDBCard className="w-60 mb-4 shadow-box-example z-depth-5">
              <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>
                  <MDBListGroup>
                    <MDBListGroupItem><Daterange/></MDBListGroupItem>
                    <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardText>
                <MDBBtn color="primary">Payment</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            </MDBRow>

          </>
        ) : (
          <div></div>
        )}
      </MDBContainer>
    );
  }
}

export default Payment;
