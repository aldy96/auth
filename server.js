const express = require('express');
const colors = require('colors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Routes
const auth = require('./routes/auth');

// Init dotenv
require('dotenv').config();

// Init server & connect with MongoDB
const app = express();
connectDB();

// Init Middleware
// Parse JSON
app.use(express.json());
// Express Session
app.use(
  session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
  })
);
// Cookie parser
app.use(cookieParser('secret'));

// Moutn Routes
app.use('/api/v1/auth', auth);

// Handle App Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening on ${PORT}`.cyan));
