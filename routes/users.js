const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator'); 

const User = require('../models/User');

// @route POST api/users
// @desc Register a user
// @access Public
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Plase include a vlid email').isEmail(),
  check('password', 'Plase enter a password with 6 or more characters').isLength({ min: 6})
], async (req, res) => {
  const error = validationResult(req);
  
  if(!error.isEmpty()) {
    return res.status(400).json({ error: error.array()});
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if(user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.send('User saved');

  } catch (error) {
    console.error(err.message);
    res.send(500).send('Server error');
  }
});

module.exports = router;