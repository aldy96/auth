const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;

// Why we pass instances of passport to functions when we call it  ??
// Bc we want the same instane of passort in our entire appliaction
module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' }, // we show that we have an email field like username
      async (email, password, done) => {
        try {
          // 1. Looking for User & his paassword in DB by email
          const user = await User.findOne({ email }).select('+password');
          // 2. Checking if user exists
          if (!user) {
            return done(null, false, {
              // If not exist stop function and return msg to login control
              msg: 'That email is not registered',
            });
          }
          // 3. Comparing password from form with password from DB
          // Using method from UserSchema
          const isMatch = await user.matchPassword(password);
          if (isMatch) {
            // If is match stop function adn return user to login control
            return done(null, user, { msg: 'User Found' });
          } else {
            // If not exist stop function and return msg to login control
            return done(null, false, { msg: 'Incorrect Password' });
          }
        } catch (error) {
          // If error with connection with DB return msg  to login control
          console.error(error);
          return done(null, false, { msg: 'Server Error' });
        }
      }
    )
  );
  // Serialize only user id
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  // Deserialize by user id
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => done(err));
  });
};
