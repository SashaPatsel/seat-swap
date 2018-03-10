var express = require("express");
var router = express.Router();
var path = require("path");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var GoogleStrategy = require("passport-google-oauth20");
var db = require("../models");

//local auth signup
router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/account',
        failureRedirect: '/signup'
    }
));

//local auth sign in
router.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/account',
        failureRedirect: '/signup'
    }
));

//auth with google
router.get("/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

//auth google callback
router.get("/google/callback", passport.authenticate('google'), function(req, res) {
    res.redirect("/account");
});


module.exports = router;