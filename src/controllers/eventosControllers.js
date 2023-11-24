const eventosServices = require('../services/eventosServices')

// El controlador va a manejar servicios-> que contienen la logica -> los eventos DAL 


const eventosController = {
    async getEventosAll(req, res) {
        try {
            const eventosEncontrados = await eventosServices.getAll()
            if (eventosEncontrados) {
                res.status(200).json({ success: true, eventos: eventosEncontrados })
            } else {
                res.status(404).json({ message: "No se encontraron eventos" })
            }
        } catch (err) {
            res.status(500).json({ success: false, message: err.message})
            console.log(err);
        }
    },
    async getEventosById(req, res) {
        try {
            const id = req.params.id
            console.log(id);
            const eventosEncontradosPorId = await eventosServices.getById(id)
            res.status(200).json({ success: true, eventos: eventosEncontradosPorId })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    },
    async createEventos(req, res) {
        try {
            const data = req.body
            console.log(data);
           const EventoCreated = await eventosServices.create(data)
            res.status(201).json({ success: true,eventos:EventoCreated  })

        }
        catch (err) {

            res.status(500).json({ success: false, message: err.message })
            console.log(err)

        }
    },
    async updateEventos(req, res) {
        try {
            const id = req.params.id
            const data = req.body
            const EventoModificado = await eventosServices.update(id, data)
            res.status(200).json({ success: true, eventos: EventoModificado, message: 'update' })
        } catch (err) {
            console.log(err)
            res.status(500).json({ success: false, message: err.message })
        }
    },
    async deleteEventos(req, res) {
        try {
            const id = req.params.id
            const EventoBorrado = await eventosServices.delete(id)
            res.status(200).json({ success: true, eventos: EventoBorrado, message: 'delete' })
        } catch (err) {
            console.log(err)
            res.status(500).json({ success: false, message: err.message })
        }
    }
}

module.exports = eventosController