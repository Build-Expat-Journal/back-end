const db = require('../database/dbConfig.js');

module.exports = {
  add,
  addPost,
  find,
  findBy,
  findById,
  findPostById,
  remove,
  removePost,
};

//ADD
async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findById(id);
}

async function addPost(post, user) {
  const [id] = await db('posts')
  .where('post.user_id', '=', `${user.id}`)
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

function findPostById(id) {
  return db('posts')
    .join('users', 'posts.user_id', '=', 'users.id')
    .select('posts.*', 'users.id as user')
    .where({ id })
    .first();
}


//DELETE
function remove(id) {
  return db('users')
    .where({ id })
    .delete();
}

function removePost(id) {
  return db('posts')
    .join('users', 'posts.user_id', '=', 'users.id')
    .where({ id })
    .delete();
}
