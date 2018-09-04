require("dotenv").config();
var passport = require("passport");
var LocalStrategy = require("passport-local");
// var GoogleStrategy = require("passport-google-oauth20");
var FacebookStrategy = require("passport-facebook");
var keys = require("../keys.js");
var db = require("../models");
var User = require("../models/users");
var bCrypt = require("bcrypt-nodejs");

// Passport session setup
passport.serializeUser(function(user, done) {
    console.log("serialize" + user.id);
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    console.log("deserialize" + id);
    db.User.findById(id).then(function(user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    });
});

//passport config for local signup
passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true

    },
    function(req, email, password, done) {
        process.nextTick(function() {
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                // if (err) 
                //     return done(err);

                if (user) {
                    console.log('signupMessage', 'That email is already taken.');
                    return done(null, false, { message: 'That email is already taken.' });
                } else {

                    console.log("firstname" + req.body.firstname);
                    console.log("lastname" + req.body.lastname);
                    console.log("email" + req.body.email);

                    var userPassword = generateHash(password);
                    db.User.create({
                        firstName: req.body.firstname,
                        lastName: req.body.lastname,
                        userName: (req.body.firstname + " " + req.body.lastname),
                        email: req.body.email,
                        password: userPassword,
                        authMethod: "local"
                    }).then(function(dbUser, created) {
                        if (!dbUser) {
                            return done(null, false);
                        } else {
                            return done(null, dbUser);
                        }
                    })
                }
            });

        });
    }
));

//passport config for local signin
passport.use('local-signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

        var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }

        db.User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            if (!user) {
                return done(null, false, {
                    message: 'Email does not exist'
                });
            }

            if (!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }

            var userinfo = user.get();
            return done(null, userinfo);


        }).catch(function(err) {
            console.log("Error:", err);
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
        });
    }
));

// passport config for google signin
passport.use(new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "/auth/google/callback"
    }, function(accessToken, refreshToken, profile, done) {
        console.log("Email" + profile.emails[0].value);
        console.log("ID: " + profile.id);
        console.log("Display name: " + profile.displayName);
        console.log("given name" + profile.name.givenName);
        console.log("google passport callback");

        //done(null, { id: profile.id });
        process.nextTick(function() {
            db.User.findOne({
                where: {
                    socialID: profile.id
                }
            }).then(function(user) {
                if (user) {
                    console.log('Already signed in.');
                    return done(null, user);
                } else {
                    db.User.create({
                        userName: profile.displayName,
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        email: profile.emails[0].value,
                        authMethod: "google",
                        socialID: profile.id

                    }).then(function(dbUser, created) {
                        if (!dbUser) {
                            return done(null, false);
                        } else {
                            console.log(dbUser.dataValues);
                            return done(null, dbUser);
                        }
                    })
                }


            })
        });
    }
));

// passport config for facebook signin
passport.use(new FacebookStrategy({
    clientID: keys.facebook.appID,
    clientSecret: keys.facebook.appSecret,
    callbackURL: "/auth/facebook/callback",
    profileFields: ["id", "displayName", "email", "first_name", "last_name"]
}, function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    console.log("ID: " + profile.id);
    console.log("Display name: " + profile.displayName);
    console.log("fb passport callback");


    process.nextTick(function() {
        db.User.findOne({
            where: {
                socialID: profile.id
            }
        }).then(function(user) {
            if (user) {
                console.log('signupMessage', 'That email is already taken.');
                return done(null, user);
            } else {
                db.User.create({
                    userName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    email: profile.emails[0].value,
                    authMethod: "facebook",
                    socialID: profile.id

                }).then(function(dbUser, created) {
                    if (!dbUser) {
                        return done(null, false);
                    } else {
                        console.log(dbUser.dataValues);
                        return done(null, dbUser);
                    }
                })
            }
        })
    });

}));

//generate hash for password
function generateHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};