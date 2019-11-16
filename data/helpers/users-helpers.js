const db = require('../db-config')

module.exports = {
    find,
    findById,
    addUser,
}

function find() {
    return db('users')
}

function findById(id) {
    return db('users')
    .where({ id })
    .first()
}

function addUser(user) {
    return db('users').insert(user).returning('id')
}