// import React, { Component } from "react";
// import {Consumer} from "../../context";
// import Loader from "./Loader";
// import { Link } from "react-router-dom";
// import {Row,Col, Container} from "react-bootstrap"
// import "../Files/Searchbar"


// function Listings(){
//   state = {
//     listings: []
// };
//   return(
//     <Container fluid>
//                   <Row>
//                   {this.state.listings.map((listing) => {
//                       return <Col sm={3} xs={3} lg={3} md={3}>
//                           <div className="card mb-4 shadow-sm">
//                               <div className="card-body">
//                                   <h3>{listing.listing.city}</h3>
//                                   <img className="image" src={listing.listing.picture_url} alt={listing.picture_url} />
//                                   <p className="card-text">
//                                       <strong> Price: {listing.pricing_quote.rate.amount_formatted} a night </strong>
//                                   </p>
//                                   <Link to={`/Payment/${listing.listing.id}`} className="btn btn-primary" > View Listing
//                                    </Link>
//                               </div>
//                           </div>
//                       </Col>
//                   })}
//                   </Row>
//                   </Container >
//   )}

// export default Listings;