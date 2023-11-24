const express = require('express');
const eventoRouter = require('./eventoRouter');

const indexRouter = express.Router();



indexRouter.use( "/eventos", eventoRouter );

module.exports = indexRouter