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
    const filter = this._formatFilter(debitfrom,
      debitto,
      creditfrom,
      creditto,
      creditlimitfrom,
      creditlimitto);
    return super.search({
      page,
      size,
      order,
      sort,
    }, filter);
  }

  _formatFilter(debitfrom,
    debitto,
    creditfrom,
    creditto,
    creditlimitfrom,
    creditlimitto) {
    const rawFilter = {
      debit: _.pickBy({ $gte: debitfrom, $lte: debitto }, _.identity),
      credit: _.pickBy({ $gte: creditfrom, $lte: creditto }, _.identity),
      creditLimit: _.pickBy({ $gte: creditlimitfrom, $lte: creditlimitto }, _.identity),
    };
    const arrOfFilter = Object.entries(rawFilter).map(([key, value]) => {
      if (!_.isEmpty(value)) {
        return [key, value];
      }
    }).filter((value) => !!value);
    return Object.fromEntries(arrOfFilter);
  }
}

module.exports = new CardService(card);
