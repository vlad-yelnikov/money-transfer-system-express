const CardModel = require('../models');

class CardService {
    get(id) {
        return CardModel.findById(id);
    }

    create(userData) {
        const user = new CardModel(userData);
        user.save();
        return user;
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
}

module.exports = new CardService();