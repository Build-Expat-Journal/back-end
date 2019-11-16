const db = require('../db-config')
module.exports = {
    findTripByUser,
}

function findTripByUser(id) {
    return db('trips')
    .where({id}, 'user_id')
}