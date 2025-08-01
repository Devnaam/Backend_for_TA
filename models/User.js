const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  credits: {
    type: Number,
    default: 5,
  },
  subscription_status: {
    type: String,
    enum: ['free', 'pro'],
    default: 'free',
  },
}, {
  // Automatically add 'createdAt' and 'updatedAt' fields
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);