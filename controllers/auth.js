const User = require('../models/User');

// Methods

// @desc     Create User
// @route    POST /api/v1/auth/register
// @access   Public
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send('ok');
};

// @desc     Login User
// @route    POST /api/v1/auth/login
// @access   Public
exports.loginUser = async (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  const { email, password } = req.body;
  res.send('ok');
};
