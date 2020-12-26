const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Methods

// @desc     Create User
// @route    POST /api/v1/auth/register
// @access   Public
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1. Checking if user is already exist
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    // 2. Optional check password

    // 3. Encrypt password
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(password.toString(), salt);

    // 4. Save user in DB
    await User.create(req.body);

    // 5. if everything ok ...
    return res.status(201).json({ success: true });
  } catch (error) {
    // console.error(error);
    return res.status(500).send('Server Error');
  }
};

// @desc     Login User
// @route    POST /api/v1/auth/login
// @access   Public
exports.loginUser = async (req, res, next) => {
  // console.log(req.user);
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.json({ error: 'No User Exists' });
    else {
      // console.log(user);
      req.login(user, (err) => {
        if (err) throw err;
        res.send('Successfully Authenticated');
        // console.log(req.user);
        // console.log(user);
      });
      // console.log(req.session.passport);
    }
  })(req, res, next);
};
