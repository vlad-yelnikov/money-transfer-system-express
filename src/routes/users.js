const express = require('express');
const userController = require('../controllers');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.getAll);

router.get('/:id', userController.get);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

router.get('/search', userController.search);

module.exports = router;
