const User = require('../models/User');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

// Why we pass instances of passport to functions when we call it  ??
// Bc we want the same instane of passort in our entire appliaction
module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user ()
      User.findOne({
        email: email,
      })
        // We need password
        .select('+password')
        .then((user) => {
          // if we didn't find user by email, return msg
          if (!user) {
            return done(null, false, {
              message: 'That email is not registered',
            });
          }
          // if we have user, compare his password
          bcrypt.compare(password.toString(), user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              // if comapre return user
              return done(null, user);
            } else {
              // if password is incorrect, return msg
              return done(null, false, { message: 'Incorrect Password' });
            }
          });
        });
      passport.serializeUser(function (user, done) {
        console.log(user);
        done(null, user.id);
      });

      passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
          done(err, user);
        });
      });
    })
  );
};
