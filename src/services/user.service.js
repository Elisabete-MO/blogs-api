const { User } = require('../models');

// const createUser = ({ username, password }) => User.create({ username, password });
// const getUsers = () => User.findAll();
// const getByUserId = (userId) => User.findByPk(userId);

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  getByEmail,
};
