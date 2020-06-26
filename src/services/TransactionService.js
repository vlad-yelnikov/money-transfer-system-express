const { transaction } = require('../models');
const MainService = require('./MainService');

class TransactionService extends MainService {}

module.exports = new TransactionService(transaction);
