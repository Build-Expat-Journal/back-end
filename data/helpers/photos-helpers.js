const db = require('../db-config')

module.exports = {
    findPhotosByTripId,
    findPhoto,
}

function findPhotosByTripId(trip_id) {
    return db('photos').where({ trip_id })
}

async function findPhoto(id) {
    let photo =  await db('photos').where({ id }).first()
    if (photo) {
        return photo
    } else {
        return -1
    }
}