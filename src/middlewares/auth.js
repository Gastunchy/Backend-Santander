const bcrypt = require('bcrypt')
const authModels = require('../models/User');
const jwt = require('jsonwebtoken')



const passwordVerifications = {

    hashPassword: (req, res, next) => {
        try {
            const passwordPlain = req.body.password;

            const passwordHash = bcrypt.hashSync(passwordPlain, 10)

            req.body.password = passwordHash
            next()

        } catch (error) {
            res.status(500).json({ message: " Error generating password" })
        }
    },
    verifyAuthData: (req, res, next) => {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' })
        }
        next()
    },
    verifyPassword: (req, res, next) => {
        passwordPlain = req.body.password
        passwordHash = req.user.password

        const isPasswordValid = bcrypt.compareSync(passwordPlain, passwordHash);

        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Wrong password' })
        }
        next()
    },
    verifyUserExist: async (req, res, next) => {
        const { email } = req.body

        const userFounded = await authModels.findOne({ email })
        if (!userFounded) {
            return res.status(404).json({ message: "User not found" })
        }
        req.user = userFounded
        next()
    },
    generateToken: (req, res, next) => {
        try {
            const secret_key = "secret";
            const token = jwt.sign({
                email: req.user.email
                //ver el tema del role 
            }, secret_key, { expiresIn: 60 * 5 });
            req.token = token
            next()

        } catch (error) {
            res.status(500).json({ message: " Error generating token" })
        }
    }
}

module.exports = passwordVerifications