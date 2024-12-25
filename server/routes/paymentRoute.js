const express = require('express')

const payRouter = express.Router()

payRouter.route('/create-order').post()

module.exports = payRouter