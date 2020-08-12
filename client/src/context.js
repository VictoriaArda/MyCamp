import React, {Component} from 'react';
import axios from 'axios';
const Context = React.createContext();


export class Provider extends Component {
    state ={
        listings: [],
        
    };

    componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://airbnb-com.p.rapidapi.com/listing/",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"airbnb-com.p.rapidapi.com",
            "x-rapidapi-key":"e9a234de2amshfb394e36da3e9f0p1fe03fjsnda119de32de4",
            "useQueryString":true
             }
            })
        .then(response => {
            console.log(response)
        this.setState({listings: response.data.listings})
            
    })
        .catch (err => console.log(Error));
            
    

    }


   
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
            
        )
    }
}

export const Consumer = Context.Consumer;
