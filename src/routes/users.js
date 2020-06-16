const express = require('express');
const userController = require('../controllers');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', userController.create);

module.exports = router;
