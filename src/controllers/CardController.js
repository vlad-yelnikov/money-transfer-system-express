const cardService = require('../services');

class CardController {
  async get({ params: { id } = {} }, res) {
    const response = await cardService.get(id);
    res.json(response);
    res.sendStatus(response ? 200 : 404);
  }

  async create(req, res) {
    const card = await cardService.create(req.body);
    res.json(card);
  }

  async getAll(req, res) {
    const response = await cardService.getAll();
    res.json(response);
  }

  async delete({ params: { id } = {} }, res) {
    const result = await cardService.delete(id);
    res.sendStatus(result ? 200 : 404);
  }
}
module.exports = new CardController();
