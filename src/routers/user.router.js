const express = require('express');
const { userController } = require('../controllers');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const validateUsername = require('../middlewares/validateUsername');

const router = express.Router();

router.post(
  '/',
  validateUsername,
  validateEmail,
  validatePassword,
  userController.createUser,
);

// router.get('/', userController.listUsers,);
// router.get('/:id', userController.getUser,);
// router.put('/:id', userController.updateUser,);
// router.delete('/:id', userController.deleteUser,);

module.exports = router;