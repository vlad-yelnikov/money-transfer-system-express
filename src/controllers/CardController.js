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

  async update({ params: { id } = {}, body }, res) {
    const response = await cardService.update(id, body);
    res.sendStatus(response ? 200 : 404);
  }

  async getAll(req, res) {
    const response = await cardService.getAll();
    res.json(response);
  }

  async delete({ params: { id } = {} }, res) {
    const result = await cardService.delete(id);
    res.sendStatus(result ? 200 : 404);
  }

  async search({
    query: {
      page = 1,
      size = 10,
      order,
      sort,
    } = {},
    res,
  }) {
    try {
      const response = await cardService.search({
        page,
        size,
        order,
        sort,
      });
      res.json(response);
    } catch (e) {
      res.sendStatus(400);
    }
  }
}
module.exports = new CardController();
