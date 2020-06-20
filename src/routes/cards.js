const express = require('express');
const { cardController } = require('../controllers');

const router = express.Router();

router.get('/', cardController.getAll);

router.get('/:id', cardController.get);

router.post('/', cardController.create);

router.put('/:id', cardController.update);

router.delete('/:id', cardController.delete);

router.get('/search', cardController.search);

module.exports = router;
