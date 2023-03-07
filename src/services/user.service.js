const { User } = require('../models');

const createUser = async ({ displayName, password, email, image }) => User
  .create({ displayName, password, email, image });

const getAllUsers = async () => User.findAll({
  attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
});

const getByUserId = (userId) => User.findByPk(userId, {
  attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
});

const getByEmail = async (email) => User.findOne({ where: { email } });

const deleteByLoginId = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getByEmail,
  createUser,
  getByUserId,
  getAllUsers,
  deleteByLoginId,
};
