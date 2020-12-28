const express = require('express');
const {
  registerUser,
  loginUser,
  logoutUser,
  checkSession,
} = require('../controllers/auth');

//Mount Routes
const router = express.Router();

router.route('/').get(checkSession);
router.route('/login').post(loginUser);
router.route('/register').post(registerUser);
router.route('/logout').get(logoutUser);

module.exports = router;
