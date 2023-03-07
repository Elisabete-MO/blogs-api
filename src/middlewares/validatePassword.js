module.exports = (req, res, next) => {
  const MIN_PASSWORD_LENGTH = 6;
  const { password } = req.body;
  if (!password || password.length < MIN_PASSWORD_LENGTH) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  return next();
};
