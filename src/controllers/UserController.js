const userService = require('../services');

class UserController {
  async create(req, res) {
    const user = await userService.create(req.body);
    res.json(user);
  }

  async readAll(req, res) {
    const response = await userService.readAll();
    res.json(response);
  }

  async delete({ params: { id } = {} }, res) {
    const result = await userService.delete(id);
    res.sendStatus(result ? 200 : 404);
  }

  async search({
    query: {
      page = 1, size = 10, order, sort,
    } = {}, res,
  }) {
    try {
      const response = await userService.search({
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
module.exports = new UserController();
