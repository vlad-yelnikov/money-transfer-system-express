const { user } = require('../models');

const MainService = require('./MainService');

class UserService extends MainService {}
module.exports = new UserService(user);
