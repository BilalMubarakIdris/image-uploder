const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// const uri = 'mongodb://localhost:27017/images'

// Mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(result => {
        console.log('database connect successfull')
    })
    .catch(error => {
        console.log(error)
    })

    // intiate the app
const app = express()

app.use(express.json({limit: "30mb", extended: true}))
app.use(cors())

const itemRouter = require('./router/router')

// midware to connect the route with our app
app.use('/items', itemRouter)

// default route
app.get('/', (req, res) => {
    res.send('Hello world')
})

// listening the server
app.listen(process.env.PORT, () => {
    console.log('server is running on port ', process.env.PORT)
})
