const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const data = await CategoryService.createCategory(name);
    res.status(201).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAllCategories = async (_req, res) => {
  const message = await CategoryService.getAllCategories();
  res.status(200).json(message);
};

module.exports = {
  createCategory,
  getAllCategories,
};