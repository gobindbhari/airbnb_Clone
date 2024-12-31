const express = require('express')
const { createOrderId, verifyPayment } = require('../controllers/payController')
// const createOrderId = require('../controllers/payController')

const payRouter = express.Router()

payRouter.route('/createOrder')
            .post(createOrderId)
payRouter.route('success/:sessionId')
            .post(verifyPayment)



module.exports = payRouter