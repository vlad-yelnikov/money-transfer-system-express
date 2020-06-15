const userModel = require('../models/index');

class UserService {
  create(userData) {
    const user = new userModel(userData);
    user.save();
    return user;
  }
}

module.exports = UserService;
