import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import API from "../utils/API";
import "../components/Style/logreg.css"

function Register() {
    
    const [userState, setUserState] = useState({
        firstname: "", 
        lastname: "", 
        email: "", 
        password: "", 
        confirmPassword: ""
    });

    function handleInputChange(event) {
        const {name, value} = event.target; 
        setUserState({...userState, [name]: value});
        //console.log(userState);
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        API.saveUser({
                firstname: userState.firstname,
                lastname: userState.lastname,
                email: userState.email,
                password: userState.password
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        // API.getUsers()
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
        // if (userState.password !== userState.confirmPassword){
        //     console.log("Not the same password!");
        // } else {
        //     console.log(userState);
        // }
        
    };    


    return (
        <div id="reg" className="row justify-content-center pt-5">
            <div className="col-md-6">
                <div className="card">
                    <header className="card-header">
                        <h3 className="card-title mt-2 text-center">Register</h3>
                    </header>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>First name</label>   
                                    <input type="text" name="firstname" value={userState.firstname}className="form-control" placeholder="First name" onChange={handleInputChange} />
                                </div>
                                <div className="col form-group">
                                    <label>Last name</label>
                                    <input type="text" name="lastname" value={userState.lastname} className="form-control" placeholder="Last name" onChange={handleInputChange} />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" value={userState.email} className="form-control" placeholder="Email" onChange={handleInputChange} />
                            </div>       

                            <div className="form-group">
                                <label>Create a Password</label>
                                <input type="password" name="password" value={userState.password} className="form-control"  placeholder="Password" onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPassword" value={userState.confirmPassword}  className="form-control"  placeholder="Password" onChange={handleInputChange}/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-success btn-block">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="border-top card-body text-center">If you have an account <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )  

}

export default Register;