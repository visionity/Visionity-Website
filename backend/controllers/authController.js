const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Helper function to sign token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Create and send token response
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};

// Register new user
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'fail',
        message: 'User already exists'
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      role: role || 'user'
    });

    createSendToken(newUser, 201, res);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Login user
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide email and password'
      });
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password'
      });
    }

    createSendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// --- Add placeholder implementations for now ---

exports.forgotPassword = (req, res) => {
  res.status(200).json({ message: 'forgotPassword not implemented yet' });
};

exports.resetPassword = (req, res) => {
  res.status(200).json({ message: 'resetPassword not implemented yet' });
};

exports.updatePassword = (req, res) => {
  res.status(200).json({ message: 'updatePassword not implemented yet' });
};

exports.getMe = (req, res) => {
  res.status(200).json({ message: 'getMe not implemented yet' });
};

exports.updateMe = (req, res) => {
  res.status(200).json({ message: 'updateMe not implemented yet' });
};
