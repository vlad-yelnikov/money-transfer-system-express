const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/', userController.getAll.bind(userController));

router.get('/:id', userController.get.bind(userController));

router.post('/', userController.create.bind(userController));

router.put('/:id', userController.update.bind(userController));

router.delete('/:id', userController.delete.bind(userController));

router.get('/search', userController.search.bind(userController));

module.exports = router;
