/** ===============================================
* @Name: PASSPORT
================================================= */
/** @Desc: */
// =============================================== //
//# Estrategia de autenticación JWT para Passport >>>
const { Strategy, ExtractJwt } = require('passport-jwt');
const Users = require('../models/user.model');

//# Estrategia de autenticación JWT para Passport >>>
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Busca el token en el hader Authorization usando el formato Bearer TOKEN
  secretOrKey: process.env.JWT_SECRET // Clave para verificar la firma internamente passport hace jwt.verify(token, secret)
}
// Exportación implicita / Inyectar la instancia de passport
module.exports = (passport) => {
  passport.use( // Registrar una nuva forma de autenticar: llamadas jwt
    new Strategy(options, (payload, done) => {
      // Buscar existencia de usuario
      const user = Users.findById(payload.id);
      
      if (user) {
        // (No hubo error, usuario valido) -> inyectar
        return done(null, user); // se inyecta en req.user
      }
      // Token no valido, usuario no valid, passport bloquea el acceso
      return done(null, false); 
    }) 
  )
}
