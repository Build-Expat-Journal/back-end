const db = require('../database/dbConfig.js');

module.exports = {
  add,
  addTrip,
  addPost,
  find,
  findBy,
  findById,
  findTripById,
  findPostById,
  remove,
  removeTrip,
  removePost,
};

//ADD
async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findById(id);
}

async function addTrip(trip, user) {
  const [id] = await db('trips')
  .where('trip.user_id', '=', `${user.id}`)
  .insert(trip, 'id');

  return findTripById(id);
}

async function addPost(post, trips, user) {
  const [id] = await db('posts')
  .where('post.trip_id', '=', `${trips.id}`)
  .where('trip.user_id', '=', `${user.id}`)
  .insert(post, 'id');

  return findPostById(id);
}


//FIND
function find() {
  return db('users').select('*');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function findTripById(id) {
  return db('trips')
    .join('users', 'trips.user_id', 'users.id')
    .select('trip.id', 'trip.title', 'users.id as user')
    .where({ user_id: id })
    .first();
}

function findPostById(id) {
  return db('posts')
    .join('users', 'trips.user_id', 'usrs.id')
    .join('trips', 'posts.trip_id', 'trips.id')
    .select('trip.id', 'trip.title', 'users.id as user')
    .where({ trip_id: id })
    .first();
}


//DELETE
function remove(id) {
  return db('users')
    .where({ id })
    .del();
}

function removeTrip(id) {
  return db('trips')
    .where({ id })
    .del();
}

function removePost(id) {
  return db('trips')
    .where({ id })
    .del();
}