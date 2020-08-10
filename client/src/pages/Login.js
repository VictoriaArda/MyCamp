import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../components/Style/logreg.css'
import API from '../utils/API';

function Login() {
    const [userState, setUserState] = useState({
        email: "",
        password: ""
    });
    
    function handleInputChange(event) {
        const {name, value} = event.target;
        setUserState({...userState, [name]: value})
        //console.log(userState);
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        //console.log(userState);
        API.getUser(userState.email)
        .then((res) => {
            //console.log(res.data);
            if (res.data.length !== 0) {
                console.log("let user in");
            } else {
                console.log("user not found");
            }
        })
        .catch(err => console.log(err));
        
    }

  return (
    <div id="log" class="row justify-content-center pt-5">
        <div class="col-md-6">
            <div class="card">
                <header class="card-header">
                    <h3 class="card-title mt-2 text-center">Login</h3>
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
                    {/* <a href=""> Register</a> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;

