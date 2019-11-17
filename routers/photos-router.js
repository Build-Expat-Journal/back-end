const photosDb = require('../data/helpers/photos-helpers')
const router = require('express').Router()

// get an individual photos
router.get('/:id', async(req, res) => {
    const {id} = req.params;
    let photo = await photosDb.findPhoto(id)
    if (photo) res.status(200).json(photo)
    else if (photo === []) res.status(404).json({ error: 'That photo does not exist'})
    else res.status(500).json({ error: 'Could not find that photo'})
})

module.exports = router;