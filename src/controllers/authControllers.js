const { verifyPassword } = require('../middlewares/auth');
const authModels = require('../models/User');

const authController = {

    async createUser(req, res) {
        try {

            const UserCreated = await authModels.create(req.body)
            res.status(201).json({ success: true, user: UserCreated })

        }
        catch (err) {

            res.status(500).json({ success: false, message: err.message })
            console.log(err)

        }
    },

    async login(req, res) {
        try {

            let token = req.token



            res.status(200).json({ message: "login success", token: token })

        } catch (error) {

            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = authController