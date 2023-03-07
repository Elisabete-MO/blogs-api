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

// const listUsers = async (_req, res) => {
//   const { message } = await userService.findAll();
//   res.status(200).json(message);
// };
// const getUser = async (req, res) => {
//   const { id } = req.params;
//   const { type, message } = await userService.findById(id);
//   if (type) return res.status(errorMap.mapError(type)).json({ message });
//   res.status(200).json(message);
// };
// const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   const { type, message } = await userService.deleteUser(id);
//   if (type) return res.status(errorMap.mapError(type)).json({ message });
//   res.status(204).end();
// };

// const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const user = req.body;
//   const { type, message } = await userService.updateUser(id, user);
//   if (type) return res.status(errorMap.mapError(type)).json({ message });
//   res.status(200).json(message);
// };

module.exports = {
  createUser,
};