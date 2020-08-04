import axios from "axios"

export default {
    VacationSearch: function(query) {
    const axios = require("axios");

    axios({
        "method":"GET",
        "url":"https://airbnb-com.p.rapidapi.com/listings/nearby/37.788719679657554/-122.40057774847898",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"airbnb-com.p.rapidapi.com",
        "x-rapidapi-key":"ba63c46023msha58dab36d301a7ap1b6eb9jsnb426d691bfe7",
        "useQueryString":true
        },"params":{
        "min_bathrooms":"0",
        "check_out":"2021-02-26",
        "hotel_room":"true",
        "max_guests":"1",
        "check_in":"2021-02-25",
        "private_room":"true",
        "min_bedrooms":"0",
        "offset":"0",
        "entire_home":"true",
        "min_price":"0",
        "max_price":"5000",
        "min_beds":"0",
        "radius":"5",
        "shared_room":"true"
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
   
    },

    placeSearch: function(query) {
      return axios.get("/api/MyCamp/placeSearch/" + query)
     },

    // Gets the user with the given id
    getMyCamp: function () {
        return axios.get("/api/MyCamp/");
    },

    // Saves a MyCamp to the database
    saveMyCamp: function (savedMyCamp) {
        return axios.post("/api/MyCamp", savedMyCamp);
    },

    haveMyCamp: function(id, value) {
        return axios.put("/api/MyCamp/" + id, value);  
    },

    // Deletes the MyCamp with the given id
    deleteMyCamp: function (id) {
        return axios.delete("/api/MyCamp/" + id);
    }

}