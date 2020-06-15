const UserService = require('../services');

class UserController {
  create(req, res, next) {
    const user = UserService.create(req.body);
    res.json(user);
  }
}
module.exports = UserController;
