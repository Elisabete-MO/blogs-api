const { UserService } = require('../services');
const createToken = require('../auth/createToken');

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const { id, displayName, email } = await UserService.createUser(user);
    const token = createToken(id, displayName, email);
    res.status(201).send({ token });
  } catch (err) {
    // if (errors[0].message === 'users.email must be unique') {
    //   return res.status(409).send({ message: 'User already registered' });
    // }
    return res.status(409).json({ message: 'User already registered' });
  }
};

const getAllUsers = async (_req, res) => {
  const message = await UserService.getAllUsers();
  res.status(200).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getByUserId(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  res.status(200).json(user);
};

const deleteByLoginId = async (req, res) => {
  const { id } = req.user;
  const user = await UserService.getByUserId(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  await UserService.deleteByLoginId(id);
  res.status(204).end();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteByLoginId,
};