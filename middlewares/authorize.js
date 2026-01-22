/** ==========================================================
* NAME: 
============================================================ */
/**@DESC: xxxxxxxxxx */
//# XXXXX >
const authorize = (roles=[]) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(401).json({
        message: 'Acceso Denegado !!!, no es un usuario ADMIN'
      })
    }
    next();
  }
}

module.exports = {
  authorize
}
