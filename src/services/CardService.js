const _ = require('lodash');
const { card } = require('../models');
const MainService = require('./MainService');

class CardService extends MainService {
  search({
    page,
    size,
    order,
    sort,
    debitfrom,
    debitto,
    creditfrom,
    creditto,
    creditlimitfrom,
    creditlimitto,
  }) {
    const filter = this._formatFilter(
      debitfrom,
      debitto,
      creditfrom,
      creditto,
      creditlimitfrom,
      creditlimitto
    );
    return super.search(
      {
        page,
        size,
        order,
        sort,
      },
      filter
    );
  }

  _formatFilter(
    debitfrom,
    debitto,
    creditfrom,
    creditto,
    creditlimitfrom,
    creditlimitto
  ) {
    const rawFilter = {
      debit: _.pickBy({ $gte: debitfrom, $lte: debitto }, _.identity),
      credit: _.pickBy({ $gte: creditfrom, $lte: creditto }, _.identity),
      creditLimit: _.pickBy(
        { $gte: creditlimitfrom, $lte: creditlimitto },
        _.identity
      ),
    };

    return _.omitBy(rawFilter, _.isEmpty);
  }

  async increase(id, value) {
    if (value < 0) {
      const err = new Error('Bad request');
      err.status = 400;
      throw err;
    }
    const cardDoc = await this.Model.findById(id);
    if (!cardDoc) return;
    if (cardDoc.credit < value) {
      cardDoc.debit += value - cardDoc.credit;
      cardDoc.credit = 0;
      cardDoc.save();
      return cardDoc;
    }
    cardDoc.credit -= value;
    cardDoc.save();
    return cardDoc;
  }

  async decrease(id, value) {
    const cardDoc = await this.Model.findById(id);
    if (!cardDoc) return;
    const notEnoughMoney =
      value > cardDoc.debit + cardDoc.creditLimit - cardDoc.credit;
    if (notEnoughMoney) {
      const err = new Error("You don't have enough money");
      err.status = 400;
      throw err;
    }
    if (value > cardDoc.debit) {
      cardDoc.credit += value - cardDoc.debit;
      cardDoc.debit = 0;
      cardDoc.save();
      return cardDoc;
    }
    cardDoc.debit -= value;
    await cardDoc.save();
    return cardDoc;
  }

  setLimit(id, value) {
    if (typeof creditLimit === 'number' && value > 0) {
      return this.Model.findByIdAndUpdate(id, { creditLimit: value });
    }
    const err = new Error('Bad request');
    err.status = 400;
    throw err;
  }
}

module.exports = new CardService(card);
