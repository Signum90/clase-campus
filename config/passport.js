/** ===============================================
* @Name: PASSPORT
================================================= */
/** @Desc: */
// =============================================== //
//# Estrategia de autenticación JWT para Passport >>>
const { Strategy, ExtractJwt } = require('passport-jwt');
const Users = require('../models/user.model');
const { isBlacklisted } = require('../utils/token.blacklist');

//# Estrategia de autenticación JWT para Passport >>>
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Busca el token en el hader Authorization usando el formato Bearer TOKEN
  secretOrKey: process.env.JWT_SECRET, // Clave para verificar la firma internamente passport hace jwt.verify(token, secret)
  passReqToCallback: true // 
}
// Exportación implicita / Inyectar la instancia de passport
module.exports = (passport) => {
  passport.use( // Registrar una nuva forma de autenticar: llamadas jwt
    new Strategy(options, (req, payload, done) => {
      // --------------------------------------------
      // ESTO VA AL FINAL: PASO LOGOUT
      const authHaeder = req.headers.authorization; // despues
      if (!authHaeder) return done(null, false)
      const token = authHaeder.split(' ')[1];
      if (isBlacklisted(token)) {
        return done(null, false)
      }
      // --------------------------------------------
      // ESTO VA PRIMERO
      // Buscar existencia de usuario
      const user = Users.findById(payload.id);
      // No existe usuario
      if (!user) {
        // Token no valido, usuario no valid, passport bloquea el acceso
        return done(null, false); 
      }
      // (No hubo error, usuario valido) -> inyectar
      return done(null, user); // se inyecta en req.user

    }) 
  )
}
