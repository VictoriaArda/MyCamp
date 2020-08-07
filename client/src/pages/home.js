import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "../components/Files/Carousel";
import Searchbar from "../components/Files/Searchbar";
import Footer from "../components/Files/Footer";
import Head from "../components/Files/Head";


class Home extends Component {
    render() {
        return ( <React.Fragment>
            <Daterange/>   
            <Head/>

           <Searchbar/> 
            <Carousel/> 
            <Footer/>
            </React.Fragment>            
            
        );
    }
}

export default Home;