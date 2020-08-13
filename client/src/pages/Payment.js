import React, { Component} from "react";
import axios from "axios";
import "../components/Style/payment.css"
import Head from "../components/Files/Head";
import Daterange from '../components/Files/Daterange'
import "../components/Style/bottompage.css";
import {  Link } from 'react-router-dom';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon
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
    padding: "10px",
        }

      
    return (
        <MDBContainer className="parent">
        <Head></Head>

        <MDBContainer className="wrapper">
          
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
                <MDBCardTitle>{this.state.listingInfo.sectioned_description.name} <hr></hr></MDBCardTitle>
                
                <MDBCardText>
                <MDBIcon icon="bed" /> <strong>Number of Beds:</strong> {this.state.listingInfo.bed_label}
                  <hr></hr>
                  <MDBIcon icon="bath" /> <strong>Bathroom:</strong> {this.state.listingInfo.bathroom_label}
                  <hr></hr>
                  <MDBIcon icon="user" /> <strong>Number of Guests:</strong> {this.state.listingInfo.guest_label}
                  <hr></hr>
                  <strong>Description:</strong> {this.state.listingInfo.sectioned_description.summary}
                  <hr></hr>
                  <strong>Check In Time:</strong> {this.state.listingInfo.localized_check_in_time_window}
                  <br></br>
                  <strong>Check Out Time:</strong> {this.state.listingInfo.localized_check_out_time}
                  <hr></hr>
                  <strong>Amenities:</strong> {this.state.listingInfo.categorized_preview_amenities[0].amenities}
                  <hr></hr>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
            <MDBCard className="w-60 mb-4 shadow-box-example z-depth-5">
              <MDBCardBody>
                <MDBCardTitle>Reservation and Payment</MDBCardTitle>
                <MDBCardText>
                  <MDBListGroup>
                    <MDBListGroupItem><strong>Nightly Price:</strong> $86
                    </MDBListGroupItem>
                    <MDBListGroupItem><Daterange/></MDBListGroupItem>
                    <MDBListGroupItem><strong></strong></MDBListGroupItem>
                    <MDBListGroupItem><strong>Service Fee:</strong> $ 0</MDBListGroupItem>
                    <MDBListGroupItem><strong>Cleaning Fee:</strong> $20</MDBListGroupItem>
                    <MDBListGroupItem><strong>Occupancy Taxes and Fees:</strong> $</MDBListGroupItem>
                    <MDBListGroupItem><strong>Total:</strong> $</MDBListGroupItem>



                  </MDBListGroup>
                </MDBCardText>
      
                <Link to={'/CreditCard'} className="btn btn-primary">Reserve</Link>
                

              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            </MDBRow>
          </>
        ) : (
          <div></div>
        )}
                    </MDBContainer>
                    </MDBContainer>

    );
  }
}

export default Payment;
