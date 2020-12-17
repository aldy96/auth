const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add a email'],
  },
  password: {
    type: String,
    require: [true, 'Please add a password'],
    minlength: 6,
    // Didn't return password
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
