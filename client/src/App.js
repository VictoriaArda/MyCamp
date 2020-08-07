import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddYourHome from "./pages/AddYourHome";
import Results from "./pages/Results";

class App extends Component {
    render() {
        return ( <Router>
            <div >
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/Contact'} className="nav-link">Contact</Link></li>
                <li><Link to={'/Help'} className="nav-link">Help</Link></li>
                <li><Link to={'/Register'} className="nav-link">Register</Link></li>
                <li><Link to={'/Login'} className="nav-link">Login</Link></li>
                <li><Link to={'/AddYourHome'} className="nav-link">AddYourHometoMyCamp</Link></li>
                <li><Link to={'/Results'} className="nav-link">Results</Link></li>
              </ul>
              </nav>
              <hr />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/Contact' component={Contact} />
                  <Route path='/Help' component={Help} />
                  <Route path='/Register' component={Register} />
                  <Route path='/Login' component={Login} />
                  <Route path='/AddYourHome' component={AddYourHome} />
                  <Route path='/Results' component={Results} />
              </Switch>
            </div>
          </Router>
            );
        }
    }

    export default App;