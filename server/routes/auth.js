const express = require('express');
const validator = require('validator');
const passport = require('passport');

const router = new express.Router();

function validateForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
}

router.post('/signup', (req, res, next) => {
  const validationResult = validateForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }

  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            email: 'This email is already taken.',
          },
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.',
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  const validationResult = validateForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      });
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData,
    });
  })(req, res, next);
});


module.exports = router;
