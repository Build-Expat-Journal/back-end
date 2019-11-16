
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Bob', last_name: 'Smith', username: 'bob_smith', password: 'password'},
        {first_name: 'John', last_name: 'Smith', username: 'john_smith', password: 'password'},
        {first_name: 'Jane', last_name: 'Doe', username: 'jane_doe', password: 'password'},
        {first_name: 'Joe', last_name: 'Schmoe', username: 'joe_schmoe', password: 'password'},
      ]);
    });
};
