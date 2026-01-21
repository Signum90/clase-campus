/** ==========================================================
* NAME: 
============================================================ */
/**@DESC: xxxxxxxxxx */
//# XXXXX >
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//# XXXXX >
const app = express();
const port = 3000;
//# XXXXX >
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

//# XXXXX >
app.use('/api', require('..//routes/test.routes'));

//# XXXXX >
module.exports = { app, port };