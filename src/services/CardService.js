const UserModel = require('../models');

class CardService {
  get(id) {
    return UserModel.findById(id);
  }

  create(cardData) {
    const user = new UserModel(cardData);
    user.save();
    return user;
  }

  update(id, body) {
    return UserModel.findByIdAndUpdate(id, body);
  }

  getAll() {
    return UserModel.find();
  }

  delete(id) {
    return UserModel.findByIdAndRemove(id);
  }

  search({
    page,
    size,
    order,
    sort,
  }) {
    const skip = (page - 1) * size;
    return UserModel.find({}, null, { limit: +size, skip }).sort({
      [sort]: order,
    });
  }
}

module.exports = new CardService();
