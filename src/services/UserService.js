const _ = require('lodash');
const { user } = require('../models');
const MainService = require('./MainService');

class UserService extends MainService {
  search({
    page, size, order, sort, name,
  }) {
    const filter = _.pickBy({ name }, _.identity);
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
}

module.exports = new UserService(user);
