
exports.seed = function(knex) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {title: 'Day One in Downtown', date: '2015-08-21', created_at: '', trip_id: 1},
        {title: 'The Perfect Acai', date: '2017-04-02', created_at: '', trip_id: 2},
      ]);
    });
};
