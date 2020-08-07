import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "../components/Files/Carousel";
import Searchbar from "../components/Files/Searchbar";
import Head from "../components/Files/Head";
class Home extends Component {
    render() {
        return ( <div>
             <Head/>
            <Searchbar/>             
            <Carousel/>              
       
            </div>
        );
    }
}

export default Home;