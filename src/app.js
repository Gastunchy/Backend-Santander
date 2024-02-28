const express = require('express');
const indexRouter = require('./router/indexRouter.js');
require('dotenv').config()
require('./db.js')
const createError = require('http-errors');
const cors = require('cors')
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../swagger-openapi.json");

const app = express()

// Configurar middleware de CORS para permitir solo la dirección web especificada
const corsOptions = {
    origin: (origin, callback) => {
        if (origin === "http://front.34.73.198.248.nip.io") {
            callback(null, true);
        } else {
            callback(new Error("Acceso prohibido"));
        }
    }
};

app.use(cors(corsOptions));

app.use(express.json())
app.use('/api', indexRouter)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

const NotFounded = (req, res, next) => {
    next(createError(404), "No se encontró la dirección que busca")
}
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        status: err.status || 500,
        error: {
            message: 'Acceso prohibido'
        },
        message: "Error interno del servidor"
    });
}

app.use(NotFounded)
app.use(errorHandler)

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
})
