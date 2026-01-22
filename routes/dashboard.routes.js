/** ==========================================================
* NAME: 
============================================================ */
/**@DESC: xxxxxxxxxx */
//# XXXXX >
const { Router } = require('express');
const passport = require('passport');
const { dashController } = require('../controllers/dashboard.controller');
const { authorize } = require('../middlewares/authorize');
const router = Router();

router.get(
  '/dashboard', 
  passport.authenticate('jwt', { session: false }),
  authorize(['admin']),
  dashController
);

module.exports = router;
