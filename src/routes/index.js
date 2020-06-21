const express = require('express');
const users = require('./users');
const cards = require('./cards');

const router = express.Router();

router.use('/users', users);
router.use('/cards', cards);

module.exports = router;
