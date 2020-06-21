const express = require('express');
const { cardController } = require('../controllers');

const router = express.Router();

router.get('/', (req, res, next)=> cardController.getAll(req, res, next) );

router.get('/:id', cardController.get.bind(cardController));

router.post('/', cardController.create.bind(cardController));

router.put('/:id', cardController.update.bind(cardController));

router.delete('/:id', cardController.delete.bind(cardController));

router.get('/search', cardController.search.bind(cardController));

module.exports = router;
