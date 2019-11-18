
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
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl
        .integer('city_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cities')
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
      // tbl.enum('posts', ['id', 'title', 'date', 'trip_id', 'content', 'image']).increments();  
      // tbl.enum('posts', [],{ useNative: true, existingType: true, enumName: 'posts', schemaName: 'posts' })
      tbl
        .integer('posts')
        .unsigned()
        .references('*')
        .inTable('posts')
        .where('posts.trip_id', '=', 'trips.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');  
      
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
