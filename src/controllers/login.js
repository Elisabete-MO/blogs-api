const { UserService, LoginService } = require('../services');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.getByEmail(email);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }
    const token = await LoginService.login(user);
    res.status(200).json({ token: token.message });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  login,
};