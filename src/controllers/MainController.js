class MainController {
  constructor(serviceName) {
    this.service = serviceName;
  }

  async get({ params: { id } = {} }, res) {
    const response = await this.service.get(id);
    res.json(response);
    res.sendStatus(response ? 200 : 404);
  }

  async create({ body }, res) {
    const user = await this.service.create(body);
    res.json(user);
  }

  async update({ params: { id } = {}, body }, res) {
    const response = await this.service.update(id, body);
    res.sendStatus(response ? 200 : 404);
  }

  async getAll(req, res) {
    const response = await this.service.getAll();
    res.json(response);
  }

  async delete({ params: { id } = {} }, res) {
    const result = await this.service.delete(id);
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
      const response = await this.service.search({
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
module.exports = MainController;
