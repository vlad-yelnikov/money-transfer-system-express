const express = require('express');
const userController = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', userController.create);

router.delete('/:id', userController.delete);

router.get('/search', userController.search);

module.exports = router;
