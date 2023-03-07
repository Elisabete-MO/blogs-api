module.exports = (req, res, next) => {
  const MIN_NAME_LENGTH = 8;
  const { displayName } = req.body;
  if (!displayName || displayName.length < MIN_NAME_LENGTH) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  return next();
};
