
exports.seed = function(knex) {
  return knex('trips').truncate()
    .then(function () {
      return knex('trips').insert([
        {title: 'Sunny San Diego', from: '2019-11-16', user_id: 1},
        {title: 'Welcome to Brazil', from: '2018-09-02', user_id: 1},
      ]);
    });
};
