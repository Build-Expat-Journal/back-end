const express = require('express')
const apiRouter = require('./routers/api-router')
const server = express();
const helmet = require('helmet')
const cors = require('cors')

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api', apiRouter)



module.exports = server;