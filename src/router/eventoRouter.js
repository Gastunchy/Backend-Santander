const express = require('express');
const eventosController = require('../controllers/eventosControllers');
const eventosRouter = express.Router()
const {verifyData , verifyId} = require('../middlewares/verifications')

eventosRouter.get( "/",  eventosController.getEventosAll ) 

eventosRouter.post( "/", verifyData, eventosController.createEventos ) 

eventosRouter.put( "/:id",verifyId, verifyData, eventosController.updateEventos) 

eventosRouter.delete( "/:id",verifyId, eventosController.deleteEventos )

eventosRouter.get( "/:id", verifyId, eventosController.getEventosById )

module.exports = eventosRouter