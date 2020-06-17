const userService = require('../services');

class UserController {
  create(req, res) {
    const user = userService.create(req.body);
    res.json(user);
  }

  async update({ params: { id } = {}, body }, res) {
    const response = await userService.update(id, body);
    res.sendStatus(response ? 200 : 404);
  }

  async delete({ params: { id } = {} }, res) {
    const result = await userService.delete(id);
    res.sendStatus(result ? 200 : 404);
  }

  async paginate({ query: { page = 1, size = 10 } = {}, res }) {
    try {
      const response = await userService.paginate(page, size);
      res.json(response);
    } catch (e) {
      res.sendStatus(400);
    }
  }
}
module.exports = new UserController();
