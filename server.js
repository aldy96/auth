const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');

// Init dotenv
require('dotenv').config();

// Init server & connect with MongoDB
const app = express();
connectDB();

// Handle App Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Listening on ${PORT}`.cyan));
