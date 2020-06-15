const express = require('express');

const User = require('../models/index');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  const user = new User({
    name: req.body.name,
  });
  user.save();
  res.json(user);
});

module.exports = router;
