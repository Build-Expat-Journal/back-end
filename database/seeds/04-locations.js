
exports.seed = function(knex, Promise) {
  // return knex('locations').truncate()
  //   .then(function () {
      return knex('locations').insert([
        {country_id: 1, city_id: 1},
        {country_id: 1, city_id: 2}, //2
        {country_id: 1, city_id: 3},
        {country_id: 1, city_id: 4},
        {country_id: 2, city_id: 5},
        {country_id: 3, city_id: 6}, //6
        {country_id: 4, city_id: 7},
        {country_id: 5, city_id: 8},
        {country_id: 6, city_id: 9},
        {country_id: 7, city_id: 10}, //10
        {country_id: 8, city_id: 11},
        {country_id: 9, city_id: 12},
        {country_id: 10, city_id: 13},
        {country_id: 11, city_id: 14},
      ]);
    // });
};
