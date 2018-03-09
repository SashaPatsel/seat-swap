var db = require("../models");

module.exports = function(app) {

    //create a new user
    app.post("/users", function(req, res) {
        db.User.create(req.body)
        .then(function(dbUser) {
            res.json(dbUser);
        });
    });

    //return an user's record
    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        })
    });

    //update an user's record
    app.put("/users/:id", function(req, res) {
        db.User.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbUser) {
                res.json(dbUser);
            });
    });

    //add a subscription to a user
    app.post("/subscriptions", function(req, res) {
        db.Subscription.create(req.body).then(function(dbSubscription) {
          res.json(dbSubscription);
        });
    });

    //return list of subscriptions for a given user
    app.get("/api/users/:id/subscriptions", function(req, res) {
        db.Subscription.findAll({
          where: {
            userId: req.params.id
          }
        }).then(function(dbSubscription) {
          res.json(dbSubscription);
        });
    });

    //return a subscription
    app.get("/api/subscriptions/:id", function(req, res) {
        db.Subscription.findOne({
          where: {
            id: req.params.id
          }
        }).then(function(dbSubscription) {
          res.json(dbSubscription);
        });
    });

    //update a subscription record
    app.put("/api/subscriptions/:id", function(req, res) {
        db.Subscription.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbSubscription) {
          res.json(dbSubscription);
        });
    });

    //add a ticket to a subscription
    app.post("/tickets", function(req, res) {
        db.Tickets.create({
            userId: 4,
            subId: 203,
            date: "03/08/2018",
            time: "7:42",
            seatSec: 207,
            seatRow: "H",
            seatNum: 8,
            tixStatus: "Available",
        }).then(function() {
            res.json(res);
        });
    });

    //return all tickets for a user
    app.get("/users/:id/tickets", function(req, res) {
        db.Tickets.findAll({
            where: {
                userId: req.params.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    //return a list of tickets for 1 or all subscriptions for a specific user
    app.get("/api/users/:id/subscriptions/:org?/tickets", function(req, res) {
        db.Tickets.findAll({
            where: {
                userId: req.params.id,
                org: req.params.org
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    //update a ticket record
    app.put("/tickets/:id", function(req, res) {
        db.Tickets.update({
            subscription: req.body.subscription
        }, {
            where: { userId: req.body.id }
        }).then(function(result) {
            res.json(results);
        });
    });

    //add a watcher
    app.post("/watchers", function(req, res) {
        db.Watcher.create(req.body).then(function(dbWatcher) {
          res.json(dbWatcher);
        });
    });

    //return a list of watchers for a specific user
    app.get("/api/users/:id/watchers", function(req, res) {
        db.Watcher.findAll({
          where: {
            userId: req.params.id
          }
        }).then(function(dbWatcher) {
          res.json(dbWatcher);
        });
    });

    //update a watcher
    app.put("/watchers/:id", function(req, res) {
        db.Watcher.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbWatcher) {
          res.json(dbWatcher);
        });
    });

    //remove a watcher
    app.delete("/watchers/:id", function(req, res) {
        db.Watcher.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbWatcher) {
          res.json(dbWatcher);
        });
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