// This is a test fixture to load dummy records into the models
// if a model is empty.  Once we have permanent data, this will
// not be necessary.

var db = require("../models");

module.exports = function(app) {

    //just hit this api.  no parms required.
    app.get("/api/loaddata", function(req, res) {
        checkUser();
        checkOrganization();
        checkSubscription();
        checkTicket();
        checkTeamfeed();
        res.end("OK", 200);
    });

    function checkUser() {
        db.User.count().then(function(c) {
            console.log("There are " + c + " users!")
            if (c == 0) {
                
                db.User.create({
                    firstName: "Dummy",
                    lastName: "Record"
                }, {
                    firstName: "Sasha",
                    lastName: "Patsel"
                }
                ).then(function(chicken) {
                    // res.send(chicken);
                })
            }
        })
    }

    function checkOrganization() {
        db.Organization.count().then(function(c) {
            console.log("There are " + c + " organizations!")
            if (c == 0) {
                db.Organization.create({
                    name: "Golden State Warriors"
                }, {
                    name: "San Francisco Giants"
                }
                ).then(function(chicken) {
                    // res.send(chicken);
                })
            }
        })
    }

    function checkSubscription() {
        db.Subscription.count().then(function(c) {
            console.log("There are " + c + " subscriptions!")
            if (c == 0) {
                db.Subscription.create({
                    UserId: 1,
                    OrganizationId: 1,
                    name: "My Summer Subscription"
                }, {
                    UserId: 2,
                    OrganizationId: 2,
                    name: "My Winter Subscription"
                }
                ).then(function(chicken) {
                    // res.send(chicken);
                })
            }
        })
    }

    function checkTicket() {
        db.Ticket.count().then(function(c) {
            console.log("There are " + c + " tickets!")
            if (c == 0) {
                var d = new Date().toISOString();
                db.Ticket.create({
                    UserId: 1,
                    OrganizationId: 1,
                    SubscriptionId: 1,
                    date: d,
                    seatSec: 225,
                    seatRow: "I",
                    seatNum: 16,
                    status: "locked",
                    subscription: true
                }).then(function(chicken) {
                    // res.send(chicken);
                })
            }
        })
    }

    function checkTeamfeed() {
        db.Teamfeed.count().then(function(c) {
            console.log("There are " + c + " teamfeeds!")
            if (c == 0) {
                db.Teamfeed.create({
                    UserId: 1,
                    OrganizationId: 1,
                    comment: "I love my Subscription"
                }).then(function(chicken) {
                    // res.send(chicken);
                })
            }
        })
    }
}
