import axios from "axios";

export default {
  getAllTix: function() {
    return axios.get("/api/tickets");
  },
  addTickets: function() {
    return axios.post("/api/tickets")
  }

};