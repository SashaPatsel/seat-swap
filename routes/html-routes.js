var path = require("path");
var express = require("express");
var router = express.Router();

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.render("index");
	});

	app.get("/home", function(req, res) {
			res.render("home");
	});

	app.get('/account', ensureAuthenticated, function(req, res) {
        // console.log(req);
        console.log('abc');
        res.send('hello');
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
        return userId
    }
}

