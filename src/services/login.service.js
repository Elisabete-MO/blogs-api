const createToken = require('../auth/createToken');

const login = async (user) => {
  const token = createToken(user);
  return { type: null, message: token };
};

module.exports = {
  login,
};