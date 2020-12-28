const express = require('express');
const colors = require('colors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

// Create Session Store
const MongoStore = require('connect-mongo')(session);
// Routes Controlls Methods
const auth = require('./routes/auth');
const user = require('./routes/user');

//---------END OF IMPORTS------------//

// Init dotenv
require('dotenv').config();

// Init server & connect with MongoDB
const app = express();
connectDB();

// Init Middleware
// Parse JSON
app.use(express.json());
// Parse Body
express.urlencoded({ extended: true });
// Cookie parser with secret, do not need since version 1.5.0 express session
// app.use(cookieParser('secret'));

// Express Session
app.use(
  session({
    secret: process.env.secret,
    saveUninitialized: true,
    resave: false,
    // Default store is only for debug - Save session in MongoDB
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: 'sessions',
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // one day
    },
  })
);

// Added & Init Passport Local Config for entire App
require('./config/passportConfig')(passport);
// Init passport & session
app.use(passport.initialize());
app.use(passport.session());

//---------END OF Middlewares & Config------------//

// Moutn Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/user', user);

//---------END OF Routes------------//

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Handle App Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening on ${PORT}`.cyan));
