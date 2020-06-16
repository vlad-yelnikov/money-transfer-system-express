const userService = require('../services');

class UserController {
  create(req, res) {
    const user = userService.create(req.body);
    res.json(user);
  }

  async delete({ params: { id } = {} }, res) {
    const result = await userService.delete(id);
    res.sendStatus(result ? 200 : 404);
  }
}
module.exports = new UserController();
