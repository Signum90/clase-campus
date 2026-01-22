const { addToBlacklist } = require("../utils/token.blacklist");



const logout = (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];

  addToBlacklist(token);

  res.json({ message: 'Sesión cerrada correctamente' });
};

module.exports = { logout };
