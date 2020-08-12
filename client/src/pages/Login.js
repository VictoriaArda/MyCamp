import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Head from "../components/Files/Head"
import API from '../utils/API';
import "../components/Style/login.css";

// Login component
function Login() {

    // Utilize useState hook to initialize; returns current state and function to update state
    const [userState, setUserState] = useState({
        email: "",
        password: ""
    });

    // Handles input change and sets target value to state
    function handleInputChange(event) {
        const {name, value} = event.target;
        setUserState({...userState, [name]: value});
        //console.log(userState);
    };

    // Handles form submission; post request to login user
    function handleFormSubmit(event) {
        event.preventDefault();
        //console.log(userState);
        API.loginUser({
            username: userState.email,
            password: userState.password
        })        
        .then((res) => {
            console.log(res.data);
            userExists(res);
        })
        .catch(err => console.log(err));   
   
    }

    function userExists(res) {
        //console.log(res);
        if (res.status === 200) {
            window.location ='/';
        }
    }

    // JSX rendered login form
    return (
             
        <div className="row justify-content-center pt-5">
            <div className="col-md-6">
            <Head></Head>
                <div className="card">
                    <header className="card-header">
                        <h3 className="card-title mt-2 text-center">Login</h3>
                    </header>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>                
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" value={userState.email} className="form-control" placeholder="Email" onChange={handleInputChange} />
                            </div>       

                            <div className="form-group">
                                <label>Create a Password</label>
                                <input type="password" name="password" value={userState.password} className="form-control" placeholder="Password" onChange={handleInputChange}/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-success btn-block">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="border-top card-body text-center">If you don't have an account <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Login;

