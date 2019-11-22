const db = require('../database/dbConfig.js');

module.exports = {
  findPosts,
  findBy,
  findPostById,
  findPostsByCity,
  findPostsByCountry,
};



//FIND
function findPosts() {
  return db('posts').select('*');
}

function findBy(filter) {
  return db('posts').where(filter);
}

function findPostById(id) {
  return db('posts')
    .where({ id })
    .first();
}

function findPostsByCity(id) {
    return db('posts')
      .join('cities', 'posts.city_id', '=', 'cities.id')
      .select('posts.*', 'cities.name as city')
      .where({ city_id: id })
}

function findPostsByCountry(id) {
    return db('posts')
      .join('cities', 'posts.city_id', '=', 'cities.id')
      .join('country', 'cities.country_id', '=', 'country.id')
      .select('posts.*', 'country.name as country')
      .where( {country_id: id})
}

