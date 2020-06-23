const express = require('express');
const users = require('./users');
const cards = require('./cards');
const errorHandler = require('../middleware/ErrorHandler');

const router = express.Router();

router.use('/users', users);
router.use('/cards', cards);

router.use(errorHandler);

module.exports = router;
