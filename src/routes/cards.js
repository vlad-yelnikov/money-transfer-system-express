const express = require('express');
const { cardController } = require('../controllers');

const router = express.Router();

router.get('/search', (req, res, next) => cardController.search(req, res, next));

router.get('/', (req, res, next) => cardController.getAll(req, res, next));

router.get('/:id', (req, res, next) => cardController.get(req, res, next));

router.post('/', (req, res, next) => cardController.create(req, res, next));

router.put('/:id', (req, res, next) => cardController.update(req, res, next));

router.delete('/:id', (req, res, next) => cardController.delete(req, res, next));

module.exports = router;
