import React from "react";
import { Provider } from "../../context";
import Listings from "./Listings";
import Searchbar from "./Searchbar";
import Daterange from "./Daterange";


const Home = () => {
    return(
        <Provider>
        <React.Fragment>
            <Daterange />
           <Searchbar/>
            <Listings/>
        </React.Fragment>
        </Provider>
    )
}

export default Home;