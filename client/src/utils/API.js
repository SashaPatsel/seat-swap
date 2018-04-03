import axios from "axios";

export default {
  updateUserRecord: function() {
    return axios.put("/api/users/:id");
  },
  addSub: function() {
    return axios.post("/api/subscriptions");
  },
  getAllSubs: function(userId) {
    return axios.get("/api/users/" + userId + "/subscriptions")
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
  getTixForUser: function(userId) {
    return axios.get("/api/users/" + userId + "/tickets")
  },
  getTixForUserForSub: function() {
    return axios.get("/api/users/:UserId/subscriptions/:SubscriptionId?/tickets")
  },  
  updateTix: function(id) {
    return axios.put("/api/tickets/" + id)
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
  getAllMatches: function(id) {
    return axios.get("/api/matches/" + id)
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
  },

  getWatcherAndMatch: function(id) {
    return axios.get("/api/users/" + id + "/watchers/matches")
  },
  sendTradeOffer: function(id, SwapticketId) {
    return axios.put("/api/matches/"+ id +"/swapticket/" + SwapticketId)

  }
};