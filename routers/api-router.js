const router = require('express').Router()
const usersRouter = require('./users-router')
const tripsRouter = require('./trips-router')
const photosRouter = require('./photos-router')
const express = require('express')

const authenticate = require('../authentication/authenticate-middleware')

router.get('/', (req, res) => {
    res.send({ message: 'hi from api!'})
})

router.use('/users', usersRouter)
router.use('/trips', tripsRouter)
router.use('/photos', authenticate, photosRouter)


module.exports = router;