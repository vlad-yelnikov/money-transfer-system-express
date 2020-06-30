const { transactionService } = require('../services');
const MainController = require('./MainController');

class TransactionController extends MainController {
  async rollback({ params: { id } = {}, body }, res, next) {
    try {
      const response = await this.service.rollback(id, body.flag);
      this.responseCheck(response);
      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TransactionController(transactionService);
