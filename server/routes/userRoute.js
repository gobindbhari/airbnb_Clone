const express = require('express')
const { signup, signin, updateUser, getuser } = require('../controllers/userController')

const userRoute = express.Router()

userRoute.route('/register')
                .post(signup)

userRoute.route('/signin')
                .post(signin)

userRoute.route('/update')
                .put(updateUser)
                
userRoute.route('/:id')
                .get(getuser)


module.exports = userRoute