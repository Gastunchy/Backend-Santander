const moongose = require('mongoose')
const eventosSchema = moongose.Schema({

    "name": {
        type: String,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "date": {
        type: Date,
        required: true
    },
    "description":
    {
        type: String,
        required: true
    },
    "image": {
        type: String,
        required: true
    },
    "place": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "capacity": {
        type: Number,
        required: true
    },
    "assistance": {
        type: Number,
    },
    "estimate": { 
        type: Number, 
    }
})

const eventos = moongose.model("eventos", eventosSchema)

module.exports = eventos