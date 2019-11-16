const db = require('../db-config')
module.exports = {
    findTripsByUser,
    findTrips,
    findTripById
}

function findTripsByUser(user_id) {
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