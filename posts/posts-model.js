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

function findPostsByCity(city) {
    return db('posts')
      .join('cities', 'posts.city_id', '=', 'cities.id')
      .select('posts.*', 'cities.name as city')
      .where({ name: city })
      .first();
}

function findPostsByCountry(country) {
    return db('posts')
      .join('countries', 'posts.country_id', '=', 'countries.id')
      .select('posts.*', 'countries.name as country')
      .where({ name: country })
      .first();
}

