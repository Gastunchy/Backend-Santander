const eventosDal = require('../repositories/eventosDAL')

// aca va la logica de verificacion 

const eventosServices = {
    getAll: async () => {
        const eventosFounded = await eventosDal.getAll()
        console.log(eventosFounded);
        if (eventosFounded && eventosFounded.length > 0) {
            return eventosFounded
        } else {
            throw new Error("No hay eventos para mostrar")
        }
    },

    getById: async (id) => {
        console.log(id);
        if (!id) {
            throw new Error("Se necesita un id")
        }
        const eventosFoundedById = await eventosDal.getById(id)

        if (eventosFoundedById) {
            return eventosFoundedById
        } else{
            throw new Error("No se encontro un evento con ese ID")
        }
    },
    create: async (payload) => {
        if (!payload) {
            throw new Error("Se necesita mas datos para crear un evento")
        }
        const eventoCreado = await eventosDal.create(payload)

        if (eventoCreado) {
            return eventoCreado
        }
    },
    update: async (id, payload) => {

        if (!payload || !id) {
            throw new Error("Se necesita mas datos para crear un evento")
        }
        const EventoModificado = await eventosDal.update(id, payload);

        if (EventoModificado) {
            return EventoModificado
        }
    },
    delete: async (id) => {
        if (!id) {
            throw new Error("Se necesita un id")
        }
        const eventoEliminado = await eventosDal.delete(id);
        if (eventoEliminado) {
            return eventoEliminado;
        }
    }

}
module.exports = eventosServices