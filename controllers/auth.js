const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Methods

// @desc     Create/Register User
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
    console.error(error);
    return res.status(500).send('Server Error');
  }
};

// @desc     Login User
// @route    POST /api/v1/auth/login
// @access   Public
exports.loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    // 1. Took msg from info passed from LocalStrategy config
    const { msg } = info;
    // 2. If error = success: false
    if (err) {
      console.error(err);
      res
        .status(err.statusCode || 500)
        .json({ success: false, error: `Server Error` });
    }
    // 3. If we do not found user = success: false
    if (!user) res.status(401).json({ success: false, error: msg });
    else {
      req.login(user, (err) => {
        // 4. If error when login
        if (err) {
          console.error(err);
          res
            .status(err.statusCode || 500)
            .json({ success: false, error: `Server Error` });
        }
        // 5. Finally If everything ok ...
        res.status(200).json({ success: true, msg });
      });
    }
  })(req, res, next);
};

// @desc     Check active user session
// @route    GET /api/v1/auth
// @access   Public
exports.checkSession = (req, res) => {
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    res.status(200).json({ success: true });
  } else {
    res.status(403).json({ success: false });
  }
};

// @desc     Logout User
// @route    GET /api/v1/auth/logout
// @access   Public
exports.logoutUser = (req, res) => {
  // 1. Clear Active Session in Passport
  req.logout();
  // 2. Clear Session in Mongo Store
  req.session.destroy();
  // 3. Delete unnecessary cookie
  res
    .status(200)
    .clearCookie('connect.sid', { path: '/' })
    .json({ success: true });
};
