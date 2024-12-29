const express = require('express')
const { createOrderId } = require('../controllers/payController')
// const createOrderId = require('../controllers/payController')

const payRouter = express.Router()

payRouter.route('/createOrder')
            .post(createOrderId)



module.exports = payRouter