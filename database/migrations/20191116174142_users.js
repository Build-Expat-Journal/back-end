
exports.up = function(knex) {
  return knex.schema

  .createTable('users', users=> {
    users.increments();
    users.string('name').notNullable();
    users
      .string('username', 128)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
  })

  .createTable('cities', tbl=> {
      tbl.increments();
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

  .createTable('countries', tbl=> {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl

  })

  .createTable('locations', tbl => {
      tbl.increments();
      tbl
        .integer('country_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('countries')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .integer('city_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cities')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })

  .createTable('posts', tbl=> {
      tbl.increments();
      tbl.string('title').notNullable();
      tbl.date('date');
      tbl.timestamp('created_at', Date.now());
      tbl
        .integer('trip_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('trips')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })

 .createTable('trips', tbl=> {
      tbl.increments();
      tbl.string('title');
      tbl.date('from', 64).notNullable();
      tbl.date('to', 64);   
      tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');      
      tbl
        .integer('location_id')
        .unsigned()
        .references('id')
        .inTable('locations')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');      
  })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('trips')
    .dropTableIfExists('posts')
    .dropTableIfExists('locations')
    .dropTableIfExists('countries')
    .dropTableIfExists('cities')
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