const moongose = require('mongoose')

const userSchema = moongose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    }
    ,password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: Date,
        required: true
    },
    dni:{
        type: Number,
        required: true,
        unique: true
    }
})

const user = moongose.model('User', userSchema)

module.exports = user