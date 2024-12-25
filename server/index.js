const express = require('express')
const userRoute = require('./routes/userRoute')
const postRouter = require('./routes/postRoute')
const cors = require('cors')
const db = require('./config/connection')
const Razorpay = require('razorpay')
const payRouter = require('./routes/paymentRoute')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  // origin: 'https://airbnb-clone-one-tan.vercel.app', // Frontend URL
    credentials: true, // Allow cookies to be sent
}))

const instance = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET',
});

app.use('/user',userRoute)
app.use('/post',postRouter)
app.use('/payment',payRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

exports = { instance }