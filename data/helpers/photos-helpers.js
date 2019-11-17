const db = require('../db-config')

module.exports = {
    findPhotosByTripId,
}

function findPhotosByTripId(trip_id) {
    return db('photos').where({ trip_id })
}