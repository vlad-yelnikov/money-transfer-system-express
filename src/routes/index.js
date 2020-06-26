const express = require('express');
const users = require('./users');
const cards = require('./cards');
const transactions = require('./transactions');
const errorHandler = require('../Middleware/ErrorHandler');

const router = express.Router();

router.use('/users', users);
router.use('/cards', cards);
router.use('/transactions', transactions);

router.use(errorHandler);

module.exports = router;
