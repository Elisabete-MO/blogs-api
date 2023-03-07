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

module.exports = {
  createCategory,
};