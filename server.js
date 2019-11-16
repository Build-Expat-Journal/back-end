const express = require('express')


const server = express()
server.use(express.json())

server.get('/api', (req, res) => {
    res.send({ message: 'API up!!'})
})

module.exports = server;