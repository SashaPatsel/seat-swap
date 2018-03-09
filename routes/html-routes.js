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

};


