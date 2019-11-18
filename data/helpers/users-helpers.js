const db = require('../db-config')

module.exports = {
    find,
    findById,
    findByUsername,
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

function findByUsername(username) {
    return db('users')
    .where({ username })
    .first()
}

async function addUser(user) {
    // if(!user.username || !user.password) return false;
    // let taken = await findByUsername(user.username)
    // if (taken) return -1;
    return db('users').insert(user, 'id')
}