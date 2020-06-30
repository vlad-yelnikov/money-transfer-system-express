const express = require('express');
const { transactionController } = require('../controllers');

const router = express.Router();

router.get('/search', (req, res, next) => transactionController.search(req, res, next));

router.get('/:id', (req, res, next) => transactionController.get(req, res, next));

router.get('/', (req, res, next) => transactionController.getAll(req, res, next));

router.post('/', (req, res, next) => transactionController.create(req, res, next));

router.patch('/rollback/:id', (req, res, next) => transactionController.rollback(req, res, next));
module.exports = router;
