const { userService } = require('../services');
const MainController = require('./MainController');

class UserController extends MainController {}

module.exports = new UserController(userService);
