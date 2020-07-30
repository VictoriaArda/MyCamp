import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
import Carousels from "./components/Files/Carousels"
import fire from './config/fire'

class App extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            user: {}
        }
    }
    logout = () => {
        fire.auth().signOut();
    }
    render() {
        return ( <
            HashRouter >
            <
            div >
            <
            h1 > MYCAMP < /h1> <
            ul className = "header" >
            <
            li > < NavLink to = "/" > Home < /NavLink></li >
            <
            li > < NavLink to = "/stuff" > Stuff < /NavLink></li >
            <
            li > < NavLink to = "/contact" > Contact < /NavLink></li >
            <
            /ul> <
            div className = "content" >
            <
            Route path = "/"
            component = { Home }
            /> <
            Route path = "/stuff"
            component = { Stuff }
            /> <
            Route path = "/contact"
            component = { Contact }
            />  < /
            div > <
            /div> < /
            HashRouter >
        );
    }
}

export default App;