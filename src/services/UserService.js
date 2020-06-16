const UserModel = require('../models');

class UserService {
  create(userData) {
    const user = new UserModel(userData);
    user.save();
    return user;
  }
}

module.exports = new UserService();
