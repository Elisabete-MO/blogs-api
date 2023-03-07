const express = require('express');
const validateToken = require('../auth/validateJWT');
const { postController } = require('../controllers');

const router = express.Router();

router.post(
  '/',
  validateToken,
  postController.createPost,
);

module.exports = router;