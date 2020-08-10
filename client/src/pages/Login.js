import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../components/Style/logreg.css'

function Login() {
    const [userState, setUserState] = useState({
        email: "",
        password: ""
    });
    
    function handleInputChange(event) {
        const {name, value} = event.target;
        setUserState({...userState, [name]: value})
        console.log(userState);
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(userState);
        
    }

  return (
    <div id="log" class="row justify-content-center pt-5">
        <div class="col-md-6">
            <div class="card">
                <header class="card-header">
                    <h3 class="card-title mt-2 text-center">Login</h3>
                </header>
                <div class="card-body">
                    <form onSubmit={handleFormSubmit}>                
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" value={userState.email} class="form-control" placeholder="Email" onChange={handleInputChange} />
                        </div>       

                        <div class="form-group">
                            <label>Create a Password</label>
                            <input type="password" name="password" value={userState.password} class="form-control" placeholder="Password" onChange={handleInputChange}/>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-success btn-block">Login</button>
                        </div>
                    </form>
                </div>
                <div class="border-top card-body text-center">If you don't have an account <Link to="/register">Register</Link>
                    {/* <a href=""> Register</a> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;

