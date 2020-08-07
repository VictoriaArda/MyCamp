import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Daterange from "../components/Files/Daterange";
import Carousel from "../components/Files/Carousel";
import Searchbar from "../components/Files/Searchbar";
import Footer from "../components/Files/Footer";


class Home extends Component {
    render() {
        return ( <React.Fragment>
            <Daterange/>   
           <Searchbar/> 
            <Carousel/> 
            <Footer/>
            </React.Fragment>            
            
        );
    }
}

export default Home;