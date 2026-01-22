/** ==========================================================
* NAME: 
============================================================ */
/**@DESC: xxxxxxxxxx */
//# XXXXX >
const dashController = (req, res) => {
  
  res.status(200).json({
    message: "Ingreso al Dash",
    Iduser: req.user.id,
    user: req.user.email
  })
}

module.exports = {
  dashController
}