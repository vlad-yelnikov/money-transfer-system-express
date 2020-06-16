const UserModel = require('../models');

class UserService {
  create(userData) {
    const user = new UserModel(userData);
    user.save();
    return user;
  }

  async delete(id) {
    return UserModel.findByIdAndRemove(id);
  }
}

module.exports = new UserService();
