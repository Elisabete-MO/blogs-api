const { Category } = require('../models');

const createCategory = async (name) => Category.create({ name });

const getAllCategories = async () => Category.findAll();

const getByCategoryId = (id) => Category.findByPk(id);

module.exports = {
  createCategory,
  getAllCategories,
  getByCategoryId,
};
