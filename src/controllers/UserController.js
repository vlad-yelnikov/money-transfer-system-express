const userService = require('../services');

class UserController {
  create(req, res, next) {
    const user = userService.create(req.body);
    res.json(user);
  }
}
module.exports = new UserController();
