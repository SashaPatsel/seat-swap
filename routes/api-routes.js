var db = require("../models");
var keys = require("../keys.js")
var Client = require('node-rest-client').Client;
var client = new Client();
const Op = db.Sequelize.Op;

module.exports = function(app) {

    //return a user's record
    // app.get("/api/users/:id", function(req, res) {
    //     db.User.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbUser) {
    //         res.json(dbUser);
    //     })
    // });

    //update a user's record
    app.put("/api/users/:Userid", function(req, res) {
        var id;
        if (req.params.UserId === "me") {
            if (Number.isInteger(req.session.id)) {
                id = req.session.id
            }
            else {
                res.status(401)
            }
        }
        else {
            id = req.params.UserId
        };
        db.User.update(
            req.body, {
                where: {
                    id: id
                }
            }).then(function(dbUser) {
                res.json(dbUser);
            }).catch(function(err) {
                
                res.status(500).json(err);
          });
    });

    //add a subscription to a user
    app.post("/api/subscriptions", function(req, res) {
        if (!req.body.UserId) {
            if (Number.isInteger(req.session.id)) {
                req.body.UserId = req.session.id
            }
            else {
                res.status(401)
            }
        }
            db.Subscription.create({
                name: req.body.name,
                UserId: req.body.UserId,
                OrganizationId: req.body.OrganizationId
            }).then(function(dbSubscription) {
                res.json(dbSubscription);
            }).catch(function(err) {
                
                res.status(500).json(err);
            });

    });

    //return list of subscriptions for a given user
    app.get("/api/users/:UserId/subscriptions", function(req, res) {
        var id;
        if (req.params.UserId === "me") {
            if (Number.isInteger(req.session.id)) {
                id = req.session.id
            }
            else {
                res.status(401)
            }
        }
        else {
            id = req.params.UserId
        };
        db.Subscription.findAll({
            where: {
                UserId: id
            }
        }).then(function(dbSubscription) {
            res.json(dbSubscription);
        }).catch(function(err) {
                
            res.status(500).json(err);
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
        }).catch(function(err) {
                
            res.status(500).json(err);
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
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    // Get a list of all tickets
    app.get("/api/tickets", function(req, res) {
        var queryObj = {};
        if (req.query.status) {
            queryObj = { where: { status: req.query.status } };
        };
        db.Ticket.findAll({
              queryObj
            }).then(function(data) {
                res.json(data);
            }).catch(function(err) {
                
                res.status(500).json(err);
          });
    });

    // Get a list of all tickets
    app.get("/api/tickets/available", function(req, res) {
        db.Ticket.findAll({
              where: {
                  status: {
                      $or: {
                          $eq: "available",
                          $eq: "flex"
                      }
                  }
              }
            }).then(function(data) {
                res.json(data);
            }).catch(function(err) {
                
                res.status(500).json(err);
          });
    });

    //add a ticket to a subscription
    app.post("/api/tickets", function(req, res) {
        if (!req.body.UserId) {
            if (Number.isInteger(req.session.id)) {
                req.body.UserId = req.session.id
            }
            else {
                res.status(401)
            }
        }
        console.log(req.body);
        db.Ticket.create(req.body)
        .then(function(dbTicket) {
            findWatcherMatches(dbTicket);
            res.json(dbTicket);
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    // Find tickets that match the criteria of the watcher
    function findWatcherMatches(ticketRecord){
        // console.log('findTicketMatches: called');

        db.Watcher.findAll({
            where: {
                OrganizationId: ticketRecord.OrganizationId,
                eventDate: ticketRecord.date
            }
        }).then(function(dbWatchers) {
          console.log(JSON.stringify(dbWatchers, null, 4));

          dbWatchers.forEach(function(singleWatcherMatch) {
            writeMatch(singleWatcherMatch, ticketRecord);
          });
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    }
    

    //return all tickets for a user
    app.get("/api/users/:UserId/tickets", function(req, res) {
        var id;
        if (req.params.UserId === "me") {
            if (req.session) {
                id = req.session.id
            }
            else {
                res.status(401)
            }
        }
        else {
            id = req.params.UserId
        };
        db.Ticket.findAll({
            where: {
                UserId: req.params.UserId
            }
        }).then(function(results) {
            res.json(results);
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    //return a list of tickets for 1 or all subscriptions for a specific user
    app.get("/api/users/:UserId/subscriptions/:SubscriptionId?/tickets", function(req, res) {
        var id;
        if (req.params.UserId === "me") {
            if (Number.isInteger(req.session.id)) {
                id = req.session.id
            }
            else {
                res.status(401)
            }
        }
        else {
            id = req.params.UserId
        };
        var queryObj = { where: { UserId: id } };

        if (req.params.SubscriptionId) {
            queryObj.where.SubscriptionId = req.params.SubscriptionId
        };
        console.log(queryObj);
        db.Ticket.findAll(queryObj).then(function(results) {
            res.json(results);
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    //update a ticket record
    app.put("/api/tickets/:id", function(req, res) {
        db.Ticket.update({
            status: req.body.status
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            res.json(result);
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    //add a watcher
    app.post("/api/watchers", function(req, res) {
        
        db.Watcher.create(req.body).then(function(dbWatcher) {
            findTicketMatches(dbWatcher);
            res.json(dbWatcher);
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    // Find tickets that match the criteria of the watcher
    function findTicketMatches(watcherRecord){
        // console.log('findTicketMatches: called');

        var minDate = new Date(watcherRecord.eventDate);
        var maxDate = new Date(watcherRecord.eventDate);
        maxDate.setHours(maxDate.getHours() + 23);
        maxDate.setMinutes(maxDate.getMinutes() + 59);
        console.log(minDate);
        console.log(maxDate);
        db.Ticket.findAll({
            where: {
                OrganizationId: watcherRecord.OrganizationId,
                date: {
                    [Op.lte]: maxDate,
                    [Op.gte]: minDate 
                }
            }
        }).then(function(dbTickets) {
            // console.log(dbTickets)
            // console.log("Hello, it's me you're looking for.")
            // console.log(JSON.stringify(dbTickets, null, 4));

          dbTickets.forEach(function(singleTicketMatch) {
            writeMatch(watcherRecord, singleTicketMatch);
          });
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    }

    // write a match record
    function writeMatch(watcher, ticket){
        console.log('writeMatch: called');
        console.log(watcher, ticket);

        db.Match.create({
            'WatcherId': watcher.id,
            'TicketId': ticket.id
        }).then(function(dbMatches) {
            console.log('writeMatch: matches created');
            console.log(JSON.stringify(dbMatches, null, 4));
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    } 

    //return a list of watchers for a specific user
    app.get("/api/users/:UserId/watchers", function(req, res) {
        var id;
        if (req.params.UserId === "me") {
            if (Number.isInteger(req.session.id)) {
                id = req.session.id
            }
            else {
                res.status(401)
            }
        }
        else {
            id = req.params.UserId
        };
        db.Watcher.findAll({
            where: {
                UserId: id
            }
        }).then(function(dbWatcher) {
            res.json(dbWatcher);
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    //return a list of watchers for a specific user with results of the matches
    app.get("/api/users/:UserId/watchers/matches", function(req, res) {
        var id;
        if (req.params.UserId === "me") {
            if (Number.isInteger(req.session.id)) {
                id = req.session.id
            }
            else {
                res.status(401)
            }
        }
        else {
            id = req.params.UserId
        };
        db.Watcher.findAll({
            attributes: ['eventDate'],
            where: { UserId: id },
            include: [ {
                model: db.Organization,
                attributes:['name']
                        }, {
                model: db.Match, 
                attributes:['id','TicketId', 'SwapticketId'],
                include: [ { 
                    model: db.Ticket, attributes:['id','eventTitle','date','seatSec', 'seatRow', 'SeatNum']
                            }, {
                    model: db.Ticket, as: 'Swapticket', attributes:['id','eventTitle','date','seatSec', 'seatRow', 'SeatNum'] 
                            }
                ]
            } ]
            // include: [ {model: db.Tickets} ]            
        }).then(function(dbWatcher) {
            res.json(dbWatcher);
        }).catch(function(err) {
                
            res.status(500).json(err);
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
        }).catch(function(err) {
                
            res.status(500).json(err);
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
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    // Return a list of all current matches
    app.get("/api/matches", function(req, res) {
        db.Match.findAll({
            include: [{
                model: db.Ticket,
                include: [{
                    model: db.Organization
                }]
            }, {
                model: db.Watcher,
                include: {
                    model: db.User
                }
            }]
            }).then(function(data) {
                res.json(data);
            }).catch(function(err) {
                
                res.status(500).json(err);
          });
    });

    // Get all matches by the User who created the Watcher
    app.get("/api/matches/:UserId", function(req, res) {
        var id;
        if (req.params.UserId === "me") {
            if (Number.isInteger(req.session.id)) {
                id = req.session.id
            }
            else {
                res.status(401)
            }
        }
        else {
            id = req.params.UserId
        };
        db.Match.findAll({
            include: [{
                model: db.Watcher,
                include: [{
                    model: db.User,
                    include: {
                        model: db.Ticket
                    }
                }]
                },
                {
                model: db.Ticket,
                where: {
                    UserId: id
                },
                include: [{
                    model: db.Organization
                },
                {
                    model: db.User
                }]
            }]
            }).then(function(data) {
                res.json(data);
            }).catch(function(err) {
                
                res.status(500).json(err);
          });
    });





    // Update match record with pointer to the ticket that is proposed in exchange for the requested ticket.
    //    Where :id is the id of the match record and (optional) SwapticketId is the is the TicketId of the proposed exchange.
    //    if SwapticketId is not provided, then the existing SwapticketId will be removed from the match record.

    app.put("/api/matches/:id/swapticket/:SwapticketId?", function(req, res) {
        if (req.params.SwapticketId === undefined) {
            req.params.SwapticketId = null
        };
        db.Match.update(
            {SwapticketId: req.params.SwapticketId},
                {where: {
                    id: req.params.id
                }
            }).then(function(dbMatch) {
                res.json(dbMatch);
            }).catch(function(err) {
                
              res.status(500).json(err);
        });
    });

    // When trade accepted, hit this put route to kick off the trade in our database
    // Find the match by it's id to return the data including the tickets to be swapped
    app.put("/api/matches/:id/traded", function(req, res) {
        db.Match.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(matchData) {
            swappedTickets(matchData, res);
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    // Using the TicketId and SwapticketId to get those tickets information
    function swappedTickets(data, res) {
        db.Ticket.findOne({
            attributes: ["date", "seatSec", "seatRow", `seatNum`,`eventTitle`,`status`,`subscription`,`OrganizationId`,`SubscriptionId`,`UserId`],
            where: {
                id: data.TicketId
            }
        }).then(function(ticket1) {
            db.Ticket.findOne({
                attributes: ["date", "seatSec", "seatRow", `seatNum`,`eventTitle`,`status`,`subscription`,`OrganizationId`,`SubscriptionId`,`UserId`],
                where: {
                    id: data.SwapticketId
                }
            }).then(function(ticket2) {
                createNewTickets(ticket1, ticket2, data, res);
            })
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    }

    // Swapping the UserIds for the tickets to be swapped and then creating those tickets with the new UserId
    function createNewTickets(one, two, matchData, res) {
        one.subscription = 0;
        two.subscription = 0;
        var temp = one.UserId;
        one.UserId = two.UserId;
        two.UserId = temp;
        db.Ticket.create(one.dataValues).then(function(response) {
            db.Ticket.create(two.dataValues).then(function(result) {
                changeOldTickets(matchData, res);
            })
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    }

    // Updating the original tickets to the status of "gone" so users can still see tickets they've traded away
    function changeOldTickets(data, res) {
        db.Ticket.update(
            {status: "gone"},
                {where: {
                    id: data.SwapticketId
                }
            }).then(function(response) {
                db.Ticket.update({
                    status: "gone"},
                        {where: {
                            id: data.TicketId
                        }
                }).then(function(result) {
                    removeWatcher(data, res);
                })
            }).catch(function(err) {
                
                res.status(500).json(err);
          });
    }

    // destroying the watcher which also destroys it's associated matches
    function removeWatcher(matchData, res) {
        db.Watcher.destroy({
            where: {
                id: matchData.WatcherId
            }
        }).then(function(data){
            res.status(200).json(data);
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    }

    //add a trade journal entry
    app.post("/api/tradejournal", function(req, res) {
        
    });

    //return a list of trade journal entries
    app.get("/api/tradejournal", function(req, res) {

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

    //return a list of comments for 1 or all organizations
    app.get("/api/organization/:OrganizationId?/teamfeed", function(req, res) {
        db.Teamfeed.findAll({
            where: {
                OrganizationId: req.params.OrganizationId
            },
            include: [{
                model: db.Organization
            }, {
                model: db.User
            }]
        }).then(function(data) {
            res.json(data);
        }).catch(function(err) {
                
            res.status(500).json(err);
      });
    });

    app.get("/api/organizations", function(req, res) {
        db.Organization.findAll({
            }).then(function(data) {
                res.json(data);
            }).catch(function(err) {
                
                res.status(500).json(err);
          });
    });
};

function ensureAuthenticated(req, res, next) {
    console.log('check something', req.session.passport.user);
    var userId;
    if (req.isAuthenticated()) {
        userId = req.session.passport.user;
        console.log("request is authenticated");
        return next();
    } else {
        userId = false;
        console.log('request is not authenticated');
        res.redirect('/');
        return;
    }
}
