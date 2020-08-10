import axios from "axios";

export default {
  getUser: function(query) {
    return axios.get("/api/users/", { params: { email: query } });
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
