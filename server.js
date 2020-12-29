//---------Imports------------//
const express = require('express');
const path = require('path');
const colors = require('colors');
const session = require('express-session');
// const cookieParser = require('cookie-parser');
const passport = require('passport');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
// Routes Controlls Methods
const auth = require('./routes/auth');
const user = require('./routes/user');
// Create Session Store
const MongoStore = require('connect-mongo')(session);
//---------End OF IMPORTS------------//

//---------Start Middlewares & Config------------//

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

// Security after decoded json and body
// Sanitize data
app.use(mongoSanitize());
// Set security headers via Helmet
app.use(helmet());
// Prevent XSS attacks
app.use(xss());
// Prevent http param pollution
app.use(hpp());
// Enable CORS
app.use(cors());
// Morgan Logger only in dev env
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

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

//---------End of Middlewares & Config------------//

//---------Mount Routes------------//
app.use('/api/v1/auth', auth);
app.use('/api/v1/user', user);
//---------End OF Routes------------//

//---------Serve react Client on Production------------//
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(express.static(path.resolve(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
//---------End of client------------//

//---------Middleware after routes------------//
// Could be init Error Handler
//---------End Middleware after route------------//

//---------Handle App Listening------------//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening on ${PORT}`.cyan));
