var path = require("path");
var express = require("express");
var router = express.Router();

module.exports = function(app) {

        //Put if/else here. the if will send ppl to the pages we've declared, the else will send every other string back to our root route. 

        //Step 2 will be to look through the users cookies and send them back to the route they were at last
    // app.get("*", function(req, res) {
    //     res.redirect("/")
    // })
    // app.get("/requests", function(req, res) {
    //     res.redirect("/")
    // })
    // app.get("/tradeoffers", function(req, res) {
    //     res.redirect("/")
    // })
    // app.get("orgtix", function(req, res) {
    //     res.redirect("/")
    // })
    // app.get("alltix", function(req, res) {
    //     res.redirect("/")
    // })
    // app.get("history", function(req, res) {
    //     res.redirect("/")
    // })
    // app.get("News", function(req, res) {
    //     res.redirect("/")
    // })
    // app.get("addTix", function(req, res) {
    //     res.redirect("/")
    // })
    // app.get("/yo", function(req, res) {
    //     res.redirect("/")
    // })



	app.get("/", function(req, res) {
        if (req.isAuthenticated()) {
            res.redirect("/");
        } else {
            res.redirect("/"); 
        }
	});

	app.get("/home", function(req, res) {
        if (req.isAuthenticated()) {
            res.redirect("/");
        } else {
            res.redirect("/"); 
        }
	});

    app.get("/logout", function(req, res) {
        console.log("Hello, it's me")      
        req.session.destroy(function(err) {
            res.clearCookie("user_id");
            res.clearCookie("user_name");
            res.clearCookie("connect.sid");
            res.redirect("/");
            console.log("Hello from the other side.")
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

