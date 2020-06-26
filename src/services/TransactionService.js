const cardServiceInstance = require('./CardService');
const { transaction } = require('../models');
const MainService = require('./MainService');

class TransactionService extends MainService {
  constructor(transactionModel, cardService) {
    super(transactionModel);
    this.cardService = cardService;
  }

  async create(data) {
    const { sender, receiver, amount } = data;
    const receiverObject = await this.cardService.get(receiver);
    if (!receiverObject) {
      const err = new Error('Receiver not found');
      err.status = 404;
      throw err;
    }
    const senderObject = await this.cardService.get(sender);
    if (!senderObject) {
      const err = new Error('Sender not found');
      err.status = 404;
      throw err;
    }
    await this.cardService.decrease(sender, amount);
    await this.cardService.increase(receiver, amount);
    return super.create(data);
  }
}

module.exports = new TransactionService(transaction, cardServiceInstance);
