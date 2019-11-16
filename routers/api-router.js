const router = require('express').Router()
const userRouter = require('./users-router')
const express = require('express')


router.get('/', (req, res) => {
    res.send({ message: 'hi from api!'})
})

router.use('/users', userRouter)


module.exports = router;