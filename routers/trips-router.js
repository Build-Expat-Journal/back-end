const db = require('../data/helpers/trips-helpers')
const tripDb = require('../data/helpers/trips-helpers')
const router = require('express').Router()
const bcrypt = require('bcryptjs');
const getToken = require('../authentication/getToken')

const validateUser = require('../authentication/validate-user')
const authenticate = require('../authentication/authenticate-middleware')


// get array of all trips
router.get('/', async (req, res) => {
    let trips = await tripDb.findTrips()
    if (trips) {
        res.status(200).json(trips)
    } else {
        res.status(500).json({ error: 'Could not get trips' })
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    let trip = await tripDb.findTripById(id)
    if (trip) res.status(200).json(trip)
    else if (!res.body) res.status(404).json({ error: "That trip doesn't exist!"})
    else res.status(500).json({ error: 'Could not get trip' })
})

module.exports = router;