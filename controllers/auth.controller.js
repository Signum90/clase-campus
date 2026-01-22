/** ===============================================
* @Name: AUTH CONTROLLER
================================================= */
/** @Desc: */
// =============================================== //
//# Imports >>>
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// const bcrypt = require('bcrypt');
const Users = require('../models/user.model');
//# 1- Función para registrar un usuario >>>
const register = async(req, res) => {
  // Tomar información
  const { body } = req;
  if (!body) {
    return res.status(200).json({
      message: 'Sin datos'
    });
  }
  const { email, password, role } = body;
  // Validar existencia del usuario
  if(Users.findByEmail(email)){
    return res.status(200).json({
      message: 'El usuario ya existe!!!'
    });
  }
  const users = await Users.createUsers({ email, password, role })

  console.log(users);
  return res.status(200).json({
    message: 'Usuario creado correctamente'
  });
}
//# Función para realizar el login >>>
const login = async (req, res) => {
  // Tomar datos
  const { email, password } = req.body;
  // Validar vacios
  if (!email || !password) {
    return res.status(400).json({ message: 'No hay datos' });
  }
  // Consultar el usuario por email
  const user = Users.findByEmail(email)
  if (!user) {
    return res.status(401).json({ message: 'Credenciales invalidas' });
  }
  // Validar credenciales, contraseña
  const valid = await bcrypt.compare(password, user.password);
  if(!valid) {
    return res.status(401).json({ message: 'Credenciales invalidas' });
  }
  // Crear el token jwt
  const token = jwt.sign(
    {id: user.id, email: user.email, role: user.role},
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.status(200).json({
    token
  });
} 
//# >>>

//# Exports >>>
module.exports = {
  register,
  login
}
