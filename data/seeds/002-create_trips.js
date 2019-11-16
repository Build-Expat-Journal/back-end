
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {trip_title: 'Honeymoon', country: 'Italy', city: 'Rome', trip_desc: 'We went to Rome. It was fun.', user_id: 1},
        {trip_title: 'Skiing vacation', country: 'switzerland', city: 'St. Moritz', trip_desc: 'We went to ski. It was fun.', user_id: 2},
        {trip_title: 'Skiing vacation', country: 'united states', city: 'Vail', trip_desc: 'We went to ski. It was fun.', user_id: 3},
        {trip_title: 'Beach vacation', country: 'united states', city: 'miami', trip_desc: 'We went to the beach. It was fun.', user_id: 4},
        {trip_title: 'Las Vegas vacation', country: 'united states', city: 'Las Vegas', trip_desc: 'We went to Las Vegas. It was fun.', user_id: 4}
      ]);
    });
};
