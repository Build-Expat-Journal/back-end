const db = require('../db-config')
module.exports = {
    findTripsByUserId,
    findTrips,
    findTripById,
    addTrip
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
    return db('trips').insert(trip).returning('id')
}
