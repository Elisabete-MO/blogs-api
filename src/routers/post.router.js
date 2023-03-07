const express = require('express');
const validateToken = require('../auth/validateJWT');
const { postController } = require('../controllers');
const validateDataPost = require('../middlewares/validateDataPost');

const router = express.Router();

router.post(
  '/',
  validateToken,
  validateDataPost,
  postController.createPost,
);

router.get('/', validateToken, postController.getAllPosts);

module.exports = router;