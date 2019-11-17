const photosDb = require('../data/helpers/photos-helpers')
const tripDb = require('../data/helpers/trips-helpers')
const usersDb = require('../data/helpers/users-helpers')
const router = require('express').Router()
const validatePhoto = require('../authentication/validate-photo')



router.get('/', async (req, res) => {
    let photos = await photosDb.findPhotos()
    if (!photos.length) res.status(404).json({ message: 'No photos found!'})
    else if (photos) res.status(200).json(photos)
    else res.status(500).json({ error: 'Could not get photos' })
})
// get an individual photos
router.get('/:id', async(req, res) => {
    const {id} = req.params;
    let photo = await photosDb.findPhoto(id)
    if (photo === -1) res.status(404).json({ error: 'That photo does not exist' })
    else if  (photo) res.status(200).json(photo)
    else res.status(500).json({ error: 'Could not find that photo'})
})

// add a photo 
router.post('/', validatePhoto, async (req, res) => {
    const photo = req.body;
    const {trip_id} = req.body;
    const {user_id} = req.body
    let user = await usersDb.findById(user_id)
    if (user) {
        let trip = await tripDb.findTripById(trip_id)
            if (trip.user_id === user_id) {
            let photoAdded = await photosDb.addPhoto(photo) // photoAdded = [photo_id]
                if (trip.id === trip_id) {
                    res.status(201).json(trip)
                } else res.status(500).json({ error: 'Failed to add trip'})
            } else if (trip.user_id !== user_id) {
                res.status(400).json({ error: 'Invalid user and trip combination'})
            } else {
            res.status(404).json({ error: 'Could not find that trip'})
        }
    } else {
        res.status(500).json({ error: 'Could not find user'})
    }
})

// delete a photo 

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    let photo = await photosDb.findPhoto(id)
    if (photo === -1) res.status(404).json({ error: 'That photo does not exist' })
    else if  (photo) {
        let deleted = await photosDb.deletePhoto(id)
        if (deleted) res.status(200).json({ message: `Photo ${id} successfully deleted`})
        else res.status(500).json({ error: 'Failed to delete photo' })
    }
    else res.status(500).json({ error: 'Could not find that photo'})
})

module.exports = router;