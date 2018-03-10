//var db = require("../models");

module.exports = function(app) {

	app.get("/", function(req, res) {
			var object = {abc: xyz};
			res.render("index", object);
	});

	app.get("/home", function(req, res) {
			var object = {abc: xyz};
			res.render("home", object);
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

