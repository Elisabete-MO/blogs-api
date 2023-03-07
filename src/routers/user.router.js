const express = require('express');
const { userController } = require('../controllers');
const validateToken = require('../auth/validateJWT');
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

router.get('/', validateToken, userController.getAllUsers);
router.get('/:id', validateToken, userController.getUserById);
router.delete('/me', validateToken, userController.deleteByLoginId);

module.exports = router;