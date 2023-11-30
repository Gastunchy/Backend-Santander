const express = require('express');
const authControllers = require('../controllers/authControllers');
const authRouter = express.Router();
const { verifyData } = require('../middlewares/verifications');
const { hashPassword, verifyAuthData, verifyPassword, verifyUserExist, generateToken } = require('../middlewares/auth');




authRouter.post('/login', verifyAuthData, verifyUserExist, verifyPassword, generateToken, authControllers.login); // 
authRouter.post('/register', verifyData, hashPassword, authControllers.createUser);




module.exports = authRouter