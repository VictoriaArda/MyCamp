import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Daterange from "../components/Files/Daterange";
import Carousel from "../components/Files/Carousel";
import Searchbar from "../components/Files/Searchbar";

class Home extends Component {
    render() {
        return ( < h2 > Welcome to React 
            <Searchbar/> 
            <Daterange/>   
            <Carousel/>                  
            </h2>
        );
    }
}

export default Home;