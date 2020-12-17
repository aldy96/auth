const express = require('express');
const colors = require('colors');
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

// Moutn Routes
app.use('/api/v1/auth', auth);

// Handle App Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening on ${PORT}`.cyan));
