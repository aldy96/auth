const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth');

//Mount Routes
const router = express.Router();

router.route('/login').post(loginUser);
router.route('/register').post(registerUser);

module.exports = router;
