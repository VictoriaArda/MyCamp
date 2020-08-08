import React, { Component } from 'react';
import "../Style/searchbar.css";
import axios from 'axios';
import { Consumer } from "../../context";
import Daterange from "./Daterange";




class Searchbar extends Component {
    state = {
        location: "",
        guests: ""
    };

    searchLocation = (e) => {
        e.preventDefault();
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.location}&key=4f4e2ab63ee1486aa8d4376d737c5ce1&language=en&pretty=1`)
            .then(res => {
                console.log(res.data.results[0].geometry)
                const { lat, lng } = (res.data.results[0].geometry)
                return axios({
                    "method": "GET",
                    "url": `https://airbnb-com.p.rapidapi.com/listings/nearby/${lat}/${lng}`,
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "airbnb-com.p.rapidapi.com",
                        "x-rapidapi-key": "e9a234de2amshfb394e36da3e9f0p1fe03fjsnda119de32de4",
                        "useQueryString": true
                    }, "params": {
                        "check_out": "2021-02-26",
                    }
                })

            })


            .then(res => {
                console.log(res.data)
                return this.setState({ listings: res.data.listings });


            })
            .catch(err => console.log(Error));
    }




    onChange = (e) => {
        this.setState({ location: e.target.value });
    }

    onChange2 = (e) => {
        this.setState({ guests: e.target.value });
    }

    
     render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <section className="search-bar">
                            <div className="container">
                                        <form className ="row" onSubmit={this.searchLocation}>
                                            <Daterange />
                                            <div className="col">
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Location..." 
                                                name="location"
                                                value={this.state.location} 
                                                onChange={this.onChange} />
                                            </div>
                                            <div className="col">
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="# of Guests" 
                                                name="guests"
                                                value={this.state.guests} 
                                                onChange={this.onChange2} />
                                            </div>
                                            <div className="col">
                                                <button class="btn btn-primary " type="submit">Search</button>
                                            </div>

                                        </form>
                                       
                            </div>
                        </section>
                  );
                }}
                


            </Consumer>

        )
    }
}




export default Searchbar;