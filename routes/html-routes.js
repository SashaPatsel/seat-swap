var path = require("path");
var express = require("express");
var router = express.Router();

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.render("index");
	});


	app.get("/home", ensureAuthenticated, function(req, res) {
			res.render("home");
	});


    app.get("/logout", function(req, res) {
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
    }
}

