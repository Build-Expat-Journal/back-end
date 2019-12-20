
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments()
      tbl.string('first_name')
      tbl.string('last_name')
      tbl.string('email')
      tbl.string('username', 128)
        .notNullable()
        .unique();
      tbl.string('password')
        .notNullable();
  })
  .createTable('trips', tbl => {
      tbl.increments()
      tbl.string('trip_title')
      tbl.string('country')
        .notNullable();
      tbl.string('city')
      tbl.string('trip_desc')
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
  .createTable('photos', tbl => {
      tbl.increments()
      tbl.integer('trip_id')
        .notNullable()
        .references('id')
        .inTable('trips')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.string('img_caption')
      tbl.string('img_url')
        .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('photos')
  .dropTableIfExists('trips')
  .dropTableIfExists('users')
};
