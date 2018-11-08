const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const fichaRoutes = require('./routes/fichaRoutes');

app.use('/', index);
app.use('/fichaRoutes', fichaRoutes);

module.exports = app;
