const UserModel = require('../models');

class UserService {
  create(userData) {
    const user = new UserModel(userData);
    user.save();
    return user;
  }

  readAll() {
    return UserModel.find();
  }

  delete(id) {
    return UserModel.findByIdAndRemove(id);
  }

  paginate(page, size) {
    return UserModel.find()
      .limit(+size)
      .skip((page - 1) * size);
  }
}

module.exports = new UserService();
