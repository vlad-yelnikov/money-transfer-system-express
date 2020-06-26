const _ = require('lodash');
const { transaction } = require('../models');
const MainService = require('./MainService');

class TransactionService extends MainService {
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

module.exports = new TransactionService(transaction);
