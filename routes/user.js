const express = require('express');
//Middlewares
const { checkAuthentication } = require('../middlewares/authorization');
// Controllers methods
const { getUser } = require('../controllers/user');

//Mount Routes
const router = express.Router();

router.route('/').get(checkAuthentication, getUser);

module.exports = router;
