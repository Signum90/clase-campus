/** ===============================================
* @Name: ####################
================================================= */
/** @Desc: */
// =============================================== //
//# Imports >>>
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const Users = require('../models/user.model');
const passport = require('passport');
const { getProducts } = require('../controllers/products.controller');
//# Instancias >>>
const router = Router();

//# Ruta sin Passport >>>
router.post('/prodnps', (req, res) => {
  try {
    // Tomar el header de autorización
    const auth = req.headers.authorization;
    // Validar el header
    if(!auth) return res.status(401).json({ message: 'No proporciono un token valido!!!' });
    // Splitear / partir el token
    const token = auth.split(' ')[1];
    // Verificar y tomar la carga util
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // Validar si existe el usuario, implicito en la respuesta del token
    const user = Users.findById(payload.id);
    // Si no existe el usuario
    if(!user) return res.status(401).json({ message: 'Acceso Denegado, Usuario invalido' });
    // Si existe
    res.status(200).json({
      message: 'ok',
      data: ['p1', 'p2']
    });
  } catch(error) {
    res.status(401).json({ message: 'No proporciono un token valido!!!' });
  }

})

router.get(
  '/prodpassport', 
  passport.authenticate('jwt', {session: false}), // Llamar la estrategia jwt, validar token
  getProducts
)
//# Exports >>>
module.exports = router;
