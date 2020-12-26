const express = require('express');
const colors = require('colors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const connectDB = require('./config/db');

// Routes Controlls Methods
const auth = require('./routes/auth');

//---------END OF IMPORTS------------//

// Init dotenv
require('dotenv').config();

// Init server & connect with MongoDB
const app = express();
connectDB();
console.log(app.get('env'));
// Init Middleware
// Parse JSON
app.use(express.json());
// Parse Body
express.urlencoded({ extended: true });
// Express Session
app.use(
  session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // one day
    },
  })
);
// Cookie parser with secret
app.use(cookieParser('secret'));
// Init passport & session
app.use(passport.initialize());
app.use(passport.session());
// Added & Init Passport Config for entire App
require('./config/passportConfig')(passport);

//---------END OF Middlewares & Config------------//

// Moutn Routes
app.use('/api/v1/auth', auth);
app.get('/api/v1/user', (req, res) => {
  console.log(req.login);
  console.log(req.logout);
  console.log(req.isAuthenticated);
  console.log(req.isUnauthenticated);
});
//---------END OF Routes------------//

// Handle App Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening on ${PORT}`.cyan));
