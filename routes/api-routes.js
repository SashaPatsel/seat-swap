var db = require("../models");

module.exports = function(app) {

	//create a new user
    app.post("/users", function(req, res) {

    });

    //return an user's record
    app.get("/api/users/:id", function(req, res) {

    });

    //update an user's record
    app.put("/users/:id", function(req, res) {

    });

    //add a subscription to an user
    app.post("/subscriptions", function(req, res) {

    });

    //return list of subscriptions for a given user
    app.get("/api/users/:id/subscriptions", function(req, res) {

    });

    //return a subscription
    app.get("/api/subscriptions/:id", function(req, res) {

    });

    //update a subscription record
    app.put("/subscriptions/:id", function(req, res) {

    });

    //add a ticket to a subscription
    app.post("/tickets", function(req, res) {

    });

    //return all tickets for an user
    app.get("/users/:id/tickets", function(req, res) {

    });

    //return a list of tickets for 1 or all subscriptions for a specific user
    app.get("/api/users/:id/subscriptions/:id?/tickets", function(req, res) {

    });

    //update a ticket record
    app.put("/tickets/:id", function(req, res) {

    });

    //add a watcher
    app.post("/watchers", function(req, res) {

    });

    //return a list of watchers for a specific user
    app.get("/api/users/:id/watchers", function(req, res) {

    });

    //update a watcher
    app.put("/watchers/:id", function(req, res) {

    });

    //remove a watcher
    app.delete("/watchers/:id", function(req, res) {

    });

    //add a trade journal entry
    app.post("/tradejournal", function(req, res) {

    });

    //return a list of trade journal entries
    app.get("/api/tradejournal", function(req, res) {

    });

    //add a feed record
    app.post("/teamfeed", function(req, res) {

    });

    //return a list of comments for 1 or all organizations
    app.get("/api/teamfeed/:org?", function(req, res) {

    });

};