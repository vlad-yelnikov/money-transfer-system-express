const { cardService } = require('../services');
const MainController = require('./MainController');

class CardController extends MainController {
  // cardSearch() {
  //   super.search();
  // }
}
module.exports = new CardController(cardService);
