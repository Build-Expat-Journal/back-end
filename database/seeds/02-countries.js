
exports.seed = function(knex) {
  return knex('country').truncate()
    .then(function () {
      return knex('country').insert([
        {name: 'United States'}, 
        {name: 'Mexico'}, //2
        {name: 'Brazil'},
        {name: 'Canada'}, //4
        {name: 'Portugal'},
        {name: 'Spain'},  //6 
        {name: 'Germany'},
        {name: 'South Korea'},  //8
        {name: 'Japan'},
        {name: 'Australia'},  //10
        {name: 'France'},
      ]);
    });
};
