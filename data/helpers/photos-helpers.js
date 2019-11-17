const db = require('../db-config')

module.exports = {
    findPhotosByTripId,
    findPhoto,
}

function findPhotosByTripId(trip_id) {
    return db('photos').where({ trip_id })
}

function findPhoto(id) {
    return db('photos').where({ id }).first()
}