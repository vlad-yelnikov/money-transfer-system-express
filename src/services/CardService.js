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

  increase(id, body) {
    return this.Model.findByIdAndUpdate(id, { debit: body.debit });
  }

  decrease(id, body) {
    return this.Model.findByIdAndUpdate(id, { debit: body.debit });
  }

  setLimit(id, body) {
    return this.Model.findByIdAndUpdate(id, { creditLimit: body.creditLimit });
  }
}

module.exports = new CardService(card);
