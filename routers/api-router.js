const router = require('express').Router()
const usersRouter = require('./users-router')
const tripsRouter = require('./trips-router')
const express = require('express')



router.get('/', (req, res) => {
    res.send({ message: 'hi from api!'})
})

router.use('/users', usersRouter)
router.use('/trips', tripsRouter)


module.exports = router;