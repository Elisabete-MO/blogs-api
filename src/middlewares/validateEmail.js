module.exports = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{3}$/g;
  const verifyEmail = regex.test(email);
  if (!verifyEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  return next();
};
