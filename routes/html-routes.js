var path = require("path");
var express = require("express");
var router = express.Router();

module.exports = function(app) {

	app.get("/", function(req, res) {
        if (req.isAuthenticated()) {
            res.redirect("/home");
        } else {
            res.render("index"); 
        }
	});

	app.get("/home", function(req, res) {
        if (req.isAuthenticated()) {
            res.render("home");
        } else {
            res.redirect("/"); 
        }
	});

    app.get("/logout", function(req, res) {
        res.clearCookie("user_id");
        req.session.destroy(function(err) {
            res.redirect("/");
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

