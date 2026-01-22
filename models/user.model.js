/** ===============================================
* @Name: USERS MODEL
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS: >>>
const bcrypt = require('bcryptjs');
const { v4:uuid } = require('uuid')

//# Manejar usuarios en cache / guardar>>>
const users = [];

//# Función para crear usuarios >>>
const createUsers = async ({ email, password, role = 'user' }) => {
  
  // Crear hash password salt de 10 
  const hashedPassword = await bcrypt.hash(password, 10);

  // Usuario
  const user = {
    id: uuid(),
    email: email,
    password: hashedPassword,
    role: role
  }

  // Agregar usuario al arregle de cache
  users.push(user);
  return users;
}

//# Función para buscar un usuario por email >>>
const findByEmail = (email) => {
  return users.find(user => user.email === email);
}

//# Función para buscar un usuario por id >>>
const findById = (id) => {
  return users.find(user => user.id === id)
}

//# >>>
//# >>>
//# >>>
//# Exports: >>>
module.exports = {
  createUsers,
  findByEmail,
  findById
}