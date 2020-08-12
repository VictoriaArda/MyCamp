import axios from "axios";

// Client-side router request functions defined
export default {

  loginUser: function(loginData) {
    return axios.post("/api/login", loginData);
  },
  saveUser: function(userData) {
    return axios.post("/api/register", userData);
  },
  saveHost: function(hostData) {
    return axios.post("/api/hosts", hostData);
  },
  getHost: function(hostData) {
    return axios.get("api/hosts", hostData);
  }
};