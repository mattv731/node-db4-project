const express = require('express');
const RecipeRouter = require('./router')

const server = express()

server.use(express.json())

server.use('/api/recipe', RecipeRouter)

server.use('/', (req, res, next) => {
    next()
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server