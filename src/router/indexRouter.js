const express = require('express');
const eventoRouter = require('./eventoRouter');
const authRouter = require('./authRouter');

const indexRouter = express.Router();



indexRouter.use( "/eventos", eventoRouter);
indexRouter.use("/", authRouter);

module.exports = indexRouter