/** ===============================================
* @Name: ####################
================================================= */
/** @Desc: */
// =============================================== //
//# >>>
//# IMPORTS: >>>
//# VAR >>>
//# FUN >>>

const getProducts = (req, res) => {
  res.status(200).json({
    message: 'Productos Encontrados',
    user: req.user.email,
    userId: req.user.id,
    productos: [
      {n: 'p1'},
      {n: 'p2'},
      {n: 'p3'}
    ]
  })
}

module.exports = {
  getProducts
}