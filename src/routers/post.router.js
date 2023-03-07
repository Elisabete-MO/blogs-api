const express = require('express');
const validateToken = require('../auth/validateJWT');
const { postController } = require('../controllers');
const validateDataPost = require('../middlewares/validateDataPost');
const validateUpdateDataPost = require('../middlewares/validateUpdateDataPost');

const router = express.Router();

router.post(
  '/',
  validateToken,
  validateDataPost,
  postController.createPost,
);

router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getByPostId);

router.put(
  '/:id',
  validateToken,
  validateUpdateDataPost,
  postController.editByPostId,
);

router.delete('/:id', validateToken, postController.deleteByPostId);

module.exports = router;