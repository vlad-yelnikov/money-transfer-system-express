const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/', (req, res, next) => userController.getAll(req, res, next));

router.get('/:id', (req, res, next) => userController.get(req, res, next));

router.post('/', (req, res, next) => userController.create(req, res, next));

router.put('/:id', (req, res, next) => userController.update(req, res, next));

router.delete('/:id', (req, res, next) => userController.delete(req, res, next));

router.get('/search', (req, res, next) => userController.search(req, res, next));

module.exports = router;
