const _ = require('lodash');
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

  search({
    page,
    size,
    order,
    sort,
    datefrom,
    dateto,
    amountfrom,
    amountto,
    card,
  }) {
    const filter = this._formatFilter(
      datefrom,
      dateto,
      amountfrom,
      amountto,
      card,
    );

    return super.search(
      {
        page,
        size,
        order,
        sort,
      },
      filter,
    );
  }

  _formatFilter(datefrom, dateto, amountfrom, amountto, card) {
    const rawFilter = {
      date: _.pickBy({ $gte: datefrom, $lte: dateto }, _.identity),
      amount: _.pickBy({ $gte: amountfrom, $lte: amountto }, _.identity),
      $or: [
        _.pickBy({ sender: card }, _.identity),
        _.pickBy({ receiver: card }, _.identity),
      ],
    };

    return _.omitBy(rawFilter, _.isEmpty);
  }
}

module.exports = new TransactionService(transaction, cardServiceInstance);
