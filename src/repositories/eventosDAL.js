const Eventos = require( '../models/Eventos' );

//aca se pone la logica de la base de datos y el CRUD 

const eventosDAL = {
     getAll: async ()=>{
        return  await Eventos.find();
    },
    getById: async (id)=>{
        return await Eventos.findById(id);
    },
    create: async (payload)=>{
        return await Eventos.create(payload);
    },
    update: async (id, payload)=>{
        return  await Eventos.findByIdAndUpdate(id, payload);
    },
    delete: async (id)=>{
        return await Eventos.findByIdAndDelete(id);
    }
}
module.exports= eventosDAL