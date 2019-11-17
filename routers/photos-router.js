const photosDb = require('../data/helpers/photos-helpers')
const tripDb = require('../data/helpers/trips-helpers')
const usersDb = require('../data/helpers/users-helpers')
const router = require('express').Router()

// get an individual photos
router.get('/:id', async(req, res) => {
    const {id} = req.params;
    let photo = await photosDb.findPhoto(id)
    if (photo === -1) res.status(404).json({ error: 'That photo does not exist' })
    else if  (photo) res.status(200).json(photo)
    else res.status(500).json({ error: 'Could not find that photo'})
})

// add a photo 
router.post('/', async (req, res) => {
    const photo = req.body;
    const {trip_id} = req.body;
    const {user_id} = req.body
    let user = await usersDb.findById(user_id)
    if (user) {
        let trip = await tripDb.findTripById(trip_id)
            if (trip) {
            let photoAdded = await photosDb.addPhoto(photo)
                if (photoAdded) res.status(201).json(photoAdded)
                else res.status(500).json({ error: 'Failed to add trip'})
            } else {
            res.status(404).json({ error: 'Could not find that trip'})
        }
    } else {
        res.status(500).json({ error: 'Could not find user'})
    }
    
})

module.exports = router;