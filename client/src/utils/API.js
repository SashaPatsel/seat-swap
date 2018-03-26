import axios from "axios";

export default {
  // Gets all books
  getAllTix: function() {
    return axios.get("/api/tickets");
  }
};