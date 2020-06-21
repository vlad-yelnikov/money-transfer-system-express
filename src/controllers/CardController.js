const { cardService } = require('../services');
const MainController = require('./MainController');

class CardController extends MainController {}
module.exports = new CardController(cardService);
