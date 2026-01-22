// 
const router = require('express').Router();
const passport = require('passport');
const { logout } = require('../controllers/logout.controller');

// Ruta post cerrar sesión
router.post(
  '/logout',
  passport.authenticate('jwt', { session: false }),
  logout
);

// Exportar >>>
module.exports = router;