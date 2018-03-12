var express = require("express");
var router = express.Router();
var path = require("path");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var GoogleStrategy = require("passport-google-oauth20");
var db = require("../models");

//local auth signup
router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home',
        failureRedirect: '/'
    }
));

//local auth sign in
router.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/home',
        failureRedirect: '/'
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
    res.cookie("user_id", req.user.dataValues.id);
    res.redirect("/home");
});

//auth with facebook
router.get("/facebook",
    passport.authenticate("facebook", {
        scope: ["public_profile", "email"]
    })
);

//auth facebook callback
router.get("/facebook/callback", passport.authenticate('facebook'), function(req, res) {
    res.cookie("user_id", req.user.dataValues.id);
    res.redirect("/home");

});

module.exports = router;