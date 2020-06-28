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
      creditlimitto,
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

  _formatFilter(
    debitfrom,
    debitto,
    creditfrom,
    creditto,
    creditlimitfrom,
    creditlimitto,
  ) {
    const rawFilter = {
      debit: _.pickBy({ $gte: debitfrom, $lte: debitto }, _.identity),
      credit: _.pickBy({ $gte: creditfrom, $lte: creditto }, _.identity),
      creditLimit: _.pickBy(
        { $gte: creditlimitfrom, $lte: creditlimitto },
        _.identity,
      ),
    };

    return _.omitBy(rawFilter, _.isEmpty);
  }

  increase(id, value) {
    if (typeof value === 'number' && value > 0) {
      return this.Model.findByIdAndUpdate(id, { $inc: { debit: value } });
    }
    const err = new Error('Bad request');
    err.status = 400;
    throw err;
  }

  decrease(id, value) {
    return this.Model.findById(id, (err, doc) => {
      if (err) {
        const err = new Error('Bad request');
        err.status = 400;
        throw err;
      } else {
        doc.debit -= value;
        doc.save();
      }
    });
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
