const express = require('express');
const validateToken = require('../auth/validateJWT');
const { categoryController } = require('../controllers');
const validateCategoryName = require('../middlewares/validateCategoryName');

const router = express.Router();

router.post(
  '/',
  validateCategoryName,
  validateToken,
  categoryController.createCategory,
);

router.get('/', validateToken, categoryController.getAllCategories);

module.exports = router;