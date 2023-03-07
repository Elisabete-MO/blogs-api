const { User } = require('../models');

// const getUsers = () => User.findAll();
// const getByUserId = (userId) => User.findByPk(userId);
const getByEmail = async (email) => User.findOne({ where: { email } });
 
const createUser = async ({ displayName, password, email, image }) => {
  User.create({ displayName, password, email, image });
};

module.exports = {
  getByEmail,
  createUser,
};
