
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {name: 'user', username: 'user', password: 'user', current_location: 'Iceland'},
      ]);
    });
};
