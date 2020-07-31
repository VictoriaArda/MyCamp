import React, {Component} from 'react';
import "../Style/searchbar.css";
import axios from 'axios';



class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state={
            query:"",
            results: {},
            loading: false,
            message: "",

        }
        this.cancel = "";

    };

    renderResults = (updatedPageNumber, query) => {
        const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
        const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
        const pageNumber= updatedPageNumber ? `&page=4${updatedPageNumber}` : "";
        const queryURL = `${BASEURL} + ${query} +${APIKEY}`;

        if(this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();

        axios.get(queryURL, {cancelToken:this.cancel.token}
            )
            .then (res => {
                console.log(res)
            })
            .catch (error => {
                if(axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: "failed"
                    })
                }
            })


    };

    handleOnInputChange =(event) => {
        const query = event.target.value;
        this.setState({query:query, loading:true, message: ""}, ()=> {
            this.renderResults(1,query);
    });
    };

    render(){
        const {query} = this.state;
        console.log(this.state)
        return(
            <div className ="container">
                <label className="location-label" htmlFor="location-input">
                    <input
                    type="text"
                    name="query"
                    value={query}
                    id="location-input"
                    placeholder="Enter location"
                    onChange={this.handleOnInputChange}
                    />
                </label>
            </div>
        )
    }

}



export default Searchbar;