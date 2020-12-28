const User = require('../models/User');

// Methods

// @desc     Get User Info
// @route    GET /api/v1/user
// @access   Private
exports.getUser = (req, res) => {
  const { user } = req;
  res.send({ user, success: true });
};
