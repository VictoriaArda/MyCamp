import React, { Component } from "react";
// import Card from "../components/Files/Card"
import {Row,Col} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class Results extends Component {
    state = {
        listings: []
    };

    render() {
        return ( <div><Row>
            {this.state.listings.map((listing) => {
                return <Col sm={3} xs={3} lg={3} md={3}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h3>{listing.listing.city}</h3>
                            <img className="image" src={listing.listing.picture_url} alt={listing.picture_url} />
                            <p className="card-text">
                                <strong> Price: {listing.pricing_quote.rate.amount_formatted} a night </strong>
                            </p>
                            <Link to={`/Payment/${listing.listing.id}`} className="btn btn-primary" > View Listing
                             </Link>
                        </div>
                    </div>
                </Col>
            })}
            </Row>
            </div>
        );
    }
}
export default Results;