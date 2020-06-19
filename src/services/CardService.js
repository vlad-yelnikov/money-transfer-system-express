const CardModel = require('../models');

class CardService {
  get(id) {
    return CardModel.findById(id);
  }

  create(cardData) {
    const card = new CardModel(cardData);
    card.save();
    return card;
  }

  update(id, body) {
    return CardModel.findByIdAndUpdate(id, body);
  }

  getAll() {
    return CardModel.find();
  }

  delete(id) {
    return CardModel.findByIdAndRemove(id);
  }

  search({
    page,
    size,
    order,
    sort,
  }) {
    const skip = (page - 1) * size;
    return CardModel.find({}, null, { limit: +size, skip }).sort({
      [sort]: order,
    });
  }
}

module.exports = new CardService();
