const express = require('express');
const userController = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

router.get('/search', userController.paginate);

module.exports = router;
