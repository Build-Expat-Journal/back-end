const db = require('../db-config')
module.exports = {
    findTripsByUser,
}

function findTripsByUser(user_id) {
    return db('trips')
    .where({user_id})
}