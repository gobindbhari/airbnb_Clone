const express = require('express')
const userRoute = require('./routes/userRoute')
const postRouter = require('./routes/postRoute')
const cors = require('cors')
const db = require('./config/connection')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors({
  // origin: 'http://localhost:5173', // Frontend URL
  origin: 'https://airbnb-clone-one-tan.vercel.app', // Frontend URL
    credentials: true, // Allow cookies to be sent
}))

app.use('/user',userRoute)
app.use('/post',postRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})