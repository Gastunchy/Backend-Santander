const joi = require('joi')

const userSchema = joi.object({
    
    email: joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Email is not valid',
    }),
    password: joi.string().min(3).max(20).alphanum().required().messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 3 characters long',
        'string.max': 'Password must be at most 20 characters long',
        'string.alphanum': 'Password must contain only alphanumeric characters',
    }),
    name: joi.string().min(3).max(20).required().messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must be at most 20 characters long',
    }),
    lastName: joi.string().min(3).max(20).required().messages({
        'string.empty': 'Lastname is required',
        'string.min': 'Lastname must be at least 3 characters long',
        'string.max': 'Lastname must be at most 20 characters long',
    }),
    age: joi.date().required().messages({
        'date.empty': 'Age is required',
   
    }),
    dni: joi.number().max(99999999).required().messages({
        'string.empty': 'Dni is required',
        'number.max': 'Dni must be at most 8',
    }),
})

const verifications = {

    verifyId: (req, res, next) => {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ error: 'Id is required' })
        }
        console.log(id);
        next()
    },
    verifyData: (req, res, next) => {

        const payload = req.body

        const { error } = userSchema.validate(payload)

        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }
        next()
    }
}
module.exports = verifications