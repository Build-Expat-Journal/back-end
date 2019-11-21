exports.up = function(knex) {
    return knex.schema
  
  .createTable('users', users=> {
      users.increments('id').primary();
      users.string('username', 128).notNullable().unique();
      users.string('password', 128).notNullable();
      users.string('first_name').notNullable();
      users.string('last_name').notNullable();
      users.string('email').notNullable().unique();
      // users
      //     .string('location_id')
      //     .unsigned()
      //     .notNullable()
      //     .references('id')
      //     .inTable('locations')
      //     .onDelete('CASCADE')
      //     .onUpdate('CASCADE');
      users.string('profile_img');
  })
  
  .createTable('posts', tbl=> {
        tbl.increments('id').primary();
        tbl.timestamp('date').defaultTo(knex.fn.now());
        tbl.string('title');
        tbl.string('content');
        tbl
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');      
        tbl
          .integer('city_id')
          .unsigned()
          .references('id')
          .inTable('cities')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');    
        tbl.string('image');
  })
  
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('posts')
      .dropTableIfExists('users')
  };