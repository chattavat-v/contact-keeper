const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); 

const User = require('../models/User');

// @route POST api/users
// @desc Register a user
// @access Public
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Plase include a vlid email').isEmail(),
  check('password', 'Plase enter a password with 6 or more characters').isLength({ min: 6})
],(req, res) => {
  const error = validationResult(req);
  
  if(!error.isEmpty()) {
    return res.status(400).json({ error: error.array()});
  }

  res.send('passed');
});

module.exports = router;