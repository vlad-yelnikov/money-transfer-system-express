const express = require('express');

const UserController = require('../controllers');

const router = express.Router();

console.log(UserController.create);
/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', UserController.create);

module.exports = router;
