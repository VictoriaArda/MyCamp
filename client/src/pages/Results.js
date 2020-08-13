import React, { Component } from "react";
// import Card from "../components/Files/Card"
import {Row,Col} from "react-bootstrap";
import { BrowserRouter as Link } from 'react-router-dom';
import Head from "../components/Files/Head";
import Paid from "../components/Files/projectpics/Paid.gif"
import "../components/Style/results.css";
class Results extends Component {
     render() {
        return ( 
            <div>
                <Head></Head>
                    <div className="center">
                        <img src= {Paid}></img>
                        <div><h1>Transaction Successful</h1></div>
                        <div><h2>Cancellation policy</h2></div>
                        <h5>Cancel before 11:00 AM on Aug 13 and only get a refund of the cleaning fee. Learn more</h5>
                        <h6>Make sure this host’s cancellation policy works for you. For reservations made after March 14, COVID-19 will not qualify as an extenuating circumstance. Learn more</h6>
                    </div>
             </div>
        );
    }
}
export default Results;