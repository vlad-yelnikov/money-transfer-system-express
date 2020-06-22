const { userService } = require('../services');
const MainController = require('./MainController');

class UserController extends MainController {
  // userSearch({
  //   query: {
  //     page,
  //     size,
  //     order,
  //     sort,
  //     name,
  //   } = {},
  // },
  //   res,
  //   next) {
  //   super.search();
  // }
}
module.exports = new UserController(userService);
