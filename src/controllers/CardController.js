const { cardService } = require('../services');
const MainController = require('./MainController');

class CardController extends MainController {
  async increase({ params: { id } = {}, body }, res, next) {
    try {
      const response = await this.service.increase(id, body.value);
      this.responseCheck(response);
      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }

  async decrease({ params: { id } = {}, body }, res, next) {
    try {
      const response = await this.service.decrease(id, body.value);
      this.responseCheck(response);
      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }

  async setLimit({ params: { id } = {}, body }, res, next) {
    try {
      const response = await this.service.setLimit(id, body.value);
      this.responseCheck(response);
      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new CardController(cardService);
