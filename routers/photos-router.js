const photosDb = require('../data/helpers/photos-helpers')
const router = require('express').Router()

router.get('/:id', async (req, res) => {
    const  { id } = req.params;
    photosDb.findPhotosByTripId(id)
    .then(photos => res.status(200).json(photos))
    .catch(err => res.status(500).json({ error: 'Could not get photos'}))

})

module.exports = router;