const db = require('../db-config')

module.exports = {
    findPhotosByTripId,
    findPhoto,
    addPhoto,
    deletePhoto,
    findPhotos
}

function findPhotos() {
    return db('photos')
}

async function findPhotosByTripId(trip_id) {
    let photos = await db('photos').where({ trip_id })
    photos.map(p => {
        p.trip_id = trip_id ? 1 : -1
        return p
    })

}

async function findPhoto(id) {
    let photo =  await db('photos').where({ id }).first()
    if (photo) {
        return photo
    } else {
        return -1
    }
}

async function addPhoto(photo) {
    return db('photos').insert(photo, 'id').returning('id')
}

function deletePhoto(id) {
    return db('photos').del().where({id})
}

async function getPhotos(id) {
    return findPhotosByTripId(id)
}

