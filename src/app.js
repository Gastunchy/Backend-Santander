const express = require('express');
const indexRouter = require('./router/indexRouter.js');
require('dotenv').config()
require('./db.js')
const createError = require('http-errors');
const cors = require('cors')
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../swagger-openapi.json");


const app = express()


app.use(cors())
app.use(express.json())
app.use('/api', indexRouter)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

const NotFounded = (req, res, next) => {
    next(createError(404), "No se encontró la direccion que busca")
}
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message
    })
}

app.use(NotFounded)
app.use(errorHandler)

app.listen(3000, () => {
    console.log("listenen on port 3000");
})
