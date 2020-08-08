import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddYourHome from "./pages/AddYourHome";
import Results from "./pages/Results";
import Payment from "./pages/Payment";

class App extends Component {
    render() {
        return ( <Router>
            <div>
              <hr />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/Contact' component={Contact} />
                  <Route path='/Help' component={Help} />
                  <Route path='/Register' component={Register} />
                  <Route path='/Login' component={Login} />
                  <Route path='/AddYourHome' component={AddYourHome} />
                  <Route path='/Results' component={Results} />
                  <Route path='/Payment' component={Payment} />
              </Switch>
            </div>
          </Router>
            );
        }
    }

    export default App;