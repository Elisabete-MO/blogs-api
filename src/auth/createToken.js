const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretJWT';

module.exports = (user) => {
  const { id, displayName, email } = user;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { 
    userId: id,
    userName: displayName,
    userEmail: email,
  } }, secret, jwtConfig);

  return token;
};