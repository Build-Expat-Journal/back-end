
exports.seed = function(knex, Promise) {
  return knex('cities').truncate()
    .then(function () {
      return knex('cities').insert([
        {name: 'San Diego', country_id: 1},
        {name: 'Pittsburg', country_id: 1}, //2
        {name: 'Duluth', country_id: 1},
        {name: 'Savannah', country_id: 1}, //4
        {name: 'Mexico City', country_id: 2},
        {name: 'Toronto', country_id: 3}, //6
        {name: 'Rio', country_id: 4},
        {name: 'Porto', country_id: 5}, //8
        {name: 'Barcelona', country_id: 6},
        {name: 'Frankfurt', country_id: 7}, //10
        {name: 'Busan', country_id: 8},
        {name: 'Tokyo', country_id: 9}, //12
        {name: 'Sydney', country_id: 10},
        {name: 'Paris', country_id: 11}, //14
      ]);
    });
};
