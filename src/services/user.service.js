const { User } = require('../models');

const createUser = async ({ displayName, password, email, image }) => User
  .create({ displayName, password, email, image });

const getAllUsers = async () => User.findAll({
  attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
});

const getByUserId = (userId) => User.findByPk(userId);

const getByEmail = async (email) => User.findOne({ where: { email } });

module.exports = {
  getByEmail,
  createUser,
  getByUserId,
  getAllUsers,
};
