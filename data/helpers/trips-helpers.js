const db = require('../db-config')
module.exports = {
    findTripsByUserId,
    findTrips,
    findTripById,
    addTrip,
    updateTrip,
    deleteTrip
}

function findTripsByUserId(user_id) {
    return db('trips')
    .where({user_id})
}

async function findTrips() {
    return trips = await db('trips')
}

async function findTripById(id) {
    return trip = await db('trips').where({id})
    .first()
}

async function addTrip(trip) {
    return db('trips').insert(trip, 'id').returning('id')
}

async function updateTrip(id, trip) {
    return db('trips').update(trip)
    .where({id})
}

async function deleteTrip(id) {
    return db('trips')
    .del()
    .where({id})
}
