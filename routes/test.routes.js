/** ==========================================================
* NAME: 
============================================================ */
/**@DESC: xxxxxxxxxx */
//# XXXXX >
const { Router } = require('express')
const router = Router();

//# XXXXX >
router.get('/test', (req, res) => {
  console.log('/test');
  res.status(200).json({
    message: 'testing Ok!!!'
  })
});

//# XXXXX >
router.post('/testpost', (req, res) => {
  console.log('/testpost');
  
  const { body } = req;
  if (!body || !body.name) {
    res.status(404).json({
      message: 'Envia los datos',
    })
  }
  const { name } = body
  res.status(200).json({
    message: 'testing data ok!!!',
    data: 'Hola ' + name
  })
});

module.exports = router;
