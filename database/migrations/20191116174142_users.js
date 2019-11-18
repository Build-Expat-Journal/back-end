
exports.up = function(knex) {
  return knex.schema

  .createTable('users', users=> {
    users.increments('id').primary();
    users.string('name').notNullable();
    users.string('current_location');
    users
      .string('username', 128)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
    users.string('profile_img');
  })

  .createTable('countries', tbl=> {
      tbl.increments('id').primary();
      tbl.string('name').notNullable();
  })

  .createTable('cities', tbl=> {
      tbl.increments('id').primary();
      tbl.string('name').notNullable();
      tbl
        .integer('country_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('countries')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })

  .createTable('locations', tbl => {
      tbl.increments('id').primary();
      tbl
        .integer('country_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('countries')
        // .join('city', country.city_id', '=', 'cities.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl
        .integer('city_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cities')
        // .join('country', 'city.country_id', '=', 'countries.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })

  .createTable('posts', tbl=> {
      tbl.increments('id').primary();
      tbl.string('title').notNullable();
      tbl.date('date');
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
      tbl
        .integer('trip_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('trips')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('content');
      tbl.string('image');
  })

 .createTable('trips', tbl=> {
      tbl.increments('id').primary();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
      tbl.string('title');
      tbl.date('from', 64);
      tbl.date('to', 64);   
      tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');      
      tbl
        .integer('country_id')
        .unsigned()
        .references('id')
        .inTable('countries')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');     
      tbl.string('image');
       
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('trips')
    .dropTableIfExists('posts')
    .dropTableIfExists('locations')
    .dropTableIfExists('cities')
    .dropTableIfExists('countries')
    .dropTableIfExists('users');
};

/*
select C.CategoryName as Category
    ,count(*) as TotalP
    , min(P.UnitPrice) as Cheapest
    , max(P.UnitPrice) as Priciest
from [Product] as P
join Category as C on P.CategoryId = C.Id
group by C.CategoryName
order by C.CategoryName;
*/

/*
SELECT * from Country WHERE Country.id = City.country_id

SELECT *, country.name
JOIN countries, country.id, cities.country_id 
WHERE cities.country_id = id

*/