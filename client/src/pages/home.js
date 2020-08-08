import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "../components/Files/Carousel";
import Searchbar from "../components/Files/Searchbar";
import Footer from "../components/Files/Footer";
import Head from "../components/Files/Head";
import Homecard from "../components/Files/Homecard"
import { Link } from 'react-router-dom';




class Home extends Component {
    state = {

        listings: []
    };

    updateListings=(data) => {
        this.setState({listings: data})
    }

    render() {
        return ( <React.Fragment>
            <Head/>
           <Searchbar updateListings={this.updateListings}/> 
            <Carousel/> 
            {/* <Listings/> */}
            {this.state.listings.map((listing) => {
                                    return <div className="col-md-6">
                                        <div className="card mb-4 shadow-sm">
                                            <div className="card-body">
                                                <h3>{listing.listing.city}</h3>
                                                <img className="image" src={listing.listing.picture_url} alt={listing.picture_url} />
                                                <p className="card-text">
                                                    <strong> Price: {listing.pricing_quote.rate.amount_formatted} a night </strong>
                                                </p>
                                                <Link to={`path='/Payment'${listing.listing.id}`} className="btn btn-primary" > View Listing
                                                 </Link>
                                            </div>
                                        </div>
                                    </div>
                                })}
            <Homecard/>
            <Footer/>
            </React.Fragment>            
            
        );
    }
}

export default Home;