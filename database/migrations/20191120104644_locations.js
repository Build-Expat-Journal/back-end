
exports.up = function(knex) {
    return knex.schema
  
    .createTable('country', tbl=> {
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
          .inTable('country')
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
          .inTable('country')
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

};
  
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('locations')
      .dropTableIfExists('cities')
      .dropTableIfExists('country')
  };