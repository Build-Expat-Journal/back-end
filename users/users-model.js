const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findTripById,
};

function find() {
  // return db('users').select('id', 'username');
  return db.select('*').from('users');



}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function findTripById(id) {
  return db('trips')
    .where({ id })
    .first();
}