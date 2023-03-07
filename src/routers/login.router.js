const express = require('express');
const { loginController } = require('../controllers');
const validateLoginMiddleware = require('../middlewares/validateLoginMiddleware');

const router = express.Router();

router.post(
  '/',
  validateLoginMiddleware,
  loginController.login,
);

module.exports = router;