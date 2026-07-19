const crypto = require('crypto');
const User = require('../models/User');
const SellerProfile = require('../models/SellerProfile');
const asyncHandler = require('../utils/asyncHandler');
const { createJwt, sendTokenCookie, createHashedToken } = require('../utils/tokenUtils');
const { isValidEmail, validateRequired } = require('../utils/validators');
const sendEmail = require('../services/emailService');

const userResponse = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  phone: user.phone,
  role: user.role,
  isEmailVerified: user.isEmailVerified,
});

const sendAuthResponse = (res, user, statusCode) => {
  const token = createJwt(user._id);
  sendTokenCookie(res, token);

  res.status(statusCode).json({
    user: userResponse(user),
    token,
  });
};

const sendVerificationEmail = async (user, req) => {
  const { plainToken, hashedToken } = createHashedToken();

  user.emailVerificationToken = hashedToken;
  user.emailVerificationExpire = Date.now() + 24 * 60 * 60 * 1000;
  await user.save({ validateBeforeSave: false });

  const verifyUrl = `${req.protocol}://${req.get('host')}/api/auth/verify-email/${plainToken}`;

  await sendEmail({
    to: user.email,
    subject: 'Verify your email',
    text: `Verify your account using this link: ${verifyUrl}`,
  });
};

const register = asyncHandler(async (req, res) => {
  const requiredError = validateRequired(req.body, ['name', 'email', 'password']);

  if (requiredError) {
    res.status(400);
    throw new Error(requiredError);
  }

  const { name, email, password, phone } = req.body;

  if (!isValidEmail(email)) {
    res.status(400);
    throw new Error('Invalid email');
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error('Email already registered');
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
    role: 'customer',
  });

  await sendVerificationEmail(user, req);
  sendAuthResponse(res, user, 201);
});

const registerSeller = asyncHandler(async (req, res) => {
  const requiredError = validateRequired(req.body, [
    'name',
    'email',
    'password',
    'storeName',
    'businessEmail',
    'businessPhone',
  ]);

  if (requiredError) {
    res.status(400);
    throw new Error(requiredError);
  }

  const { name, email, password, phone, storeName, businessEmail, businessPhone } = req.body;

  if (!isValidEmail(email) || !isValidEmail(businessEmail)) {
    res.status(400);
    throw new Error('Invalid email');
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error('Email already registered');
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
    role: 'seller',
  });

  const sellerProfile = await SellerProfile.create({
    user: user._id,
    storeName,
    businessEmail,
    businessPhone,
  });

  await sendVerificationEmail(user, req);

  const token = createJwt(user._id);
  sendTokenCookie(res, token);

  res.status(201).json({
    user: userResponse(user),
    sellerProfile,
    token,
  });
});

const login = asyncHandler(async (req, res) => {
  const requiredError = validateRequired(req.body, ['email', 'password']);

  if (requiredError) {
    res.status(400);
    throw new Error(requiredError);
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePassword(password))) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  sendAuthResponse(res, user, 200);
});

const logout = asyncHandler(async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: 'Logged out successfully' });
});

const getMe = asyncHandler(async (req, res) => {
  const response = { user: userResponse(req.user) };

  if (req.user.role === 'seller') {
    response.sellerProfile = await SellerProfile.findOne({ user: req.user._id });
  }

  res.status(200).json(response);
});

const verifyEmail = asyncHandler(async (req, res) => {
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationExpire: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error('Invalid or expired verification token');
  }

  user.isEmailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpire = undefined;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({ message: 'Email verified successfully' });
});

const forgotPassword = asyncHandler(async (req, res) => {
  const requiredError = validateRequired(req.body, ['email']);

  if (requiredError) {
    res.status(400);
    throw new Error(requiredError);
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const { plainToken, hashedToken } = createHashedToken();

  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${process.env.CLIENT_URL || 'http://localhost:5173'}/reset-password/${plainToken}`;

  await sendEmail({
    to: user.email,
    subject: 'Reset your password',
    text: `Reset your password using this link: ${resetUrl}`,
  });

  res.status(200).json({ message: 'Password reset email sent' });
});

const resetPassword = asyncHandler(async (req, res) => {
  const requiredError = validateRequired(req.body, ['password']);

  if (requiredError) {
    res.status(400);
    throw new Error(requiredError);
  }

  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  }).select('+password');

  if (!user) {
    res.status(400);
    throw new Error('Invalid or expired reset token');
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.status(200).json({ message: 'Password reset successfully' });
});

module.exports = {
  register,
  registerSeller,
  login,
  logout,
  getMe,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
