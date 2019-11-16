const db = require('../data/helpers/users-helpers')
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

//get trip by trip id
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    let trip = await tripDb.findTripById(id)
    if (trip) res.status(200).json(trip)
    else if (!res.body) res.status(404).json({ error: "That trip doesn't exist!"})
    else res.status(500).json({ error: 'Could not get trip' })
})

router.post('/', async (req, res) => {
    const trip = req.body;
    let user = await db.findById(trip.user_id)

    if (user) {
        const addedTrip = await tripDb.addTrip(trip)
        if (addedTrip) res.status(201).json(addedTrip)
        else res.status(500).json({ error: 'Could not add trip'})
    } else {
        res.status(404).json({ error: 'That user_id does not exist' })
    }
})

router.put('/:id', async(req, res) => {
    const {id} = req.params
    const changes = req.body;

    let toUpdate = await tripDb.findTripById(id)
    if (toUpdate) {
        let updatedTrip = await tripDb.updateTrip(id, changes)
        if (updatedTrip) {
            let tripToReturn = await tripDb.findTripById(id)
            res.status(200).json(tripToReturn)
        } 
        else res.status(500).json({ error: 'Could not update trip'})
    }
    else res.status(404).json({ error: 'That trip does not exist' })
})



module.exports = router;