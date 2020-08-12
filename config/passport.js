var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('../models/user');

// Login user authentication with local strategy
passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({email: username}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }
            if (!user.verifyPassword(password)) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {    
    cb(null, obj);    
});

module.exports = passport;