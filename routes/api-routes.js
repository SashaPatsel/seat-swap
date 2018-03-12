var db = require("../models");

module.exports = function(app) {

    //create a new user
    app.post("/api/users", function(req, res) {
        db.User.create(req.body)
            .then(function(dbUser) {
                res.json(dbUser);
            });
    });

    //return a user's record
    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        })
    });

    //update a user's record
    app.put("/api/users/:id", function(req, res) {
        db.User.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    //add a subscription to a user
    app.post("/api/subscriptions", function(req, res) {
        db.Subscription.create(req.body)
            .then(function(dbSubscription) {
                res.json(dbSubscription);
            });
    });

    //return list of subscriptions for a given user
    app.get("/api/users/:UserId/subscriptions", function(req, res) {
        db.Subscription.findAll({
            where: {
                UserId: req.params.UserId
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

    //update a subscription 
    app.put("/api/subscriptions/:id", function(req, res) {
        db.Subscription.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function(dbSubscription) {
            res.json(dbSubscription);
        });
    });

    //add a ticket to a subscription
    app.post("/api/tickets", function(req, res) {
        db.Ticket.create(req.body)
            .then(function(dbUser) {
                res.json(dbUser);
            });
    });

    //return all tickets for a user
    app.get("/api/users/:UserId/tickets", function(req, res) {
        db.Ticket.findAll({
            where: {
                UserId: req.params.UserId
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    //return a list of tickets for 1 or all subscriptions for a specific user
    app.get("/api/users/:UserId/subscriptions/:SubscriptionId?/tickets", function(req, res) {
        var queryObj = { where: { UserId: req.params.UserId } };

        if (req.params.SubscriptionId) {
            queryObj.where.SubscriptionId = req.params.SubscriptionId
        };
        console.log(queryObj);
        db.Ticket.findAll(queryObj).then(function(results) {
            res.json(results);
        });
    });

    //update a ticket record
    app.put("/api/tickets/:id", function(req, res) {
        db.Ticket.update({
            status: req.body.status
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(result) {
            res.json(results);
        });
    });

    //add a watcher
    app.post("/api/watchers", function(req, res) {
        db.Watcher.create(req.body).then(function(dbWatcher) {
            res.json(dbWatcher);
        });
    });

    //return a list of watchers for a specific user
    app.get("/api/users/:UserId/watchers", function(req, res) {
        db.Watcher.findAll({
            where: {
                UserId: req.params.UserId
            }
        }).then(function(dbWatcher) {
            res.json(dbWatcher);
        });
    });

    //update a watcher
    app.put("/api/watchers/:id", function(req, res) {
        db.Watcher.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function(dbWatcher) {
            res.json(dbWatcher);
        });
    });

    //remove a watcher
    app.delete("/api/watchers/:id", function(req, res) {
        db.Watcher.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbWatcher) {
            res.json(dbWatcher);
        });
    });

    //add a trade journal entry
    app.post("/api/tradejournal", function(req, res) {

    });

    //return a list of trade journal entries
    app.get("/api/tradejournal", function(req, res) {

    });

    //add a feed record [DEPRECATED]
    app.post("/teamfeed", function(req, res) {
        db.Teamfeed.create({
            UserId: req.body.UserId,
            OrganizationId: req.body.OrganizationId,
            comment: req.body.comment
        }).then(function(results) {
            res.json(results);
        });
    });

    //add a feed record
    app.post("/api/teamfeed", function(req, res) {
        db.Teamfeed.create({
            UserId: req.body.UserId,
            OrganizationId: req.body.OrganizationId,
            comment: req.body.comment
        }).then(function(results) {
            res.json(results);
        });
    });

    //return a list of comments for 1 or all organizations [DEPRECATED]
    app.get("/teamfeed/:org?", function(req, res) {
        db.Teamfeed.findAll({
            where: {
                OrganizationId: 1
            }
        }).then(function(data) {
            console.log(data)
            res.json(data);
        });
    });
    //return a list of comments for 1 or all organizations
    app.get("/api/organization/:OrganizationId?/teamfeed", function(req, res) {
        db.Teamfeed.findAll({
            where: {
                OrganizationId: req.params.OrganizationId
            }
        }).then(function(data) {
            console.log(data)
            res.json(data);
        });
    });

};