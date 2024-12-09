const express = require('express')
const { signup, signin, updateUser } = require('../controllers/userController')

const userRoute = express.Router()

userRoute.route('/register')
                .post(signup)

userRoute.route('/signin')
                .post(signin)

userRoute.route('/update')
                .put(updateUser)



module.exports = userRoute