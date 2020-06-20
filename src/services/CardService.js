const { card } = require('../models');
const MainService = require('./MainService');

class CardService extends MainService {}
module.exports = new CardService(card);
