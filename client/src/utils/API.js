import axios from "axios";

export default {
  updateUserRecord: function() {
    return axios.put("/api/users/:id");
  },
  addSub: function() {
    return axios.post("/api/subscriptions");
  },
  getAllSubs: function() {
    return axios.get("/api/users/:UserId/subscriptions");
  },
  getOneSub: function() {
    return axios.get("/api/subscriptions/:id");
  },
  updateSub: function() {
    return axios.put("/api/subscriptions/:id");
  },
  getAllTix: function() {
    return axios.get("/api/tickets");
  },
  addTickets: function() {
    return axios.post("/api/tickets")
  },
  getTixForUser: function() {
    return axios.get("/api/users/:UserId/tickets")
  },
  getTixForUserForSub: function() {
    return axios.get("/api/users/:UserId/subscriptions/:SubscriptionId?/tickets")
  },  
  updateTix: function() {
    return axios.put("/api/tickets/:id")
  },  
  addWatcher: function() {
    return axios.post("/api/watchers")
  },  
  getWatcherForUser: function() {
    return axios.get("/api/users/:UserId/watchers")
  },  
  updateWatcher: function() {
    return axios.put("/api/watchers/:id")
  },  
  deleteWatcher: function() {
    return axios.destroy("api/watchers/:id")
  },  
  getAllMatches: function() {
    return axios.get("/api/matches")
  },
  addTJournal: function() {
    return axios.post("/api/tradejournal")
  },
  getAllTJournal: function() {
    return axios.get("/api/tradejournal")
  },
  addToFeed: function() {
    return axios.post("api/teamfeed")
  },
  getFeedForOne: function() {
    return axios.get("/api/organization/:OrganizationId?/teamfeed")
  },
  getOrgs: function() {
    return axios.get("/api/organizations")
  }

};