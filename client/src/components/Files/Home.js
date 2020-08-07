import React from "react";
import { Provider } from "../../context";
import Listings from "./Listings";
import Searchbar from "./Searchbar";



const Home = () => {
    return(
        <Provider>
        <React.Fragment>
        
           <Searchbar/>
            <Listings/>
        </React.Fragment>
        </Provider>
    )
}

export default Home;