/** ==========================================================
* NAME: 
============================================================ */
/**@DESC: xxxxxxxxxx */
//# XXXXX >
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
// Llamado de passport, extension global
require('../config/passport')(passport);
//# XXXXX >
const app = express();
const port = 3000;
//# XXXXX >
app.use(passport.initialize()) // Inicializar passport
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

//# R: testing >
app.use('/api', require('../routes/test.routes'));
//# R: Auth >
app.use('/api', require('../routes/auth.routes'));
//# R: productos >
app.use('/api/productos', require('../routes/products.routes'));
//# XXXXX >
module.exports = { app, port };