const { transactionService } = require('../services');
const MainController = require('./MainController');

class TransactionController extends MainController {}

module.exports = new TransactionController(transactionService);
