exports.up = knex => knex.schema.createTable('jobs', (table) => {
  table
    .increments();
  table
    .string('title')
    .notNullable();
  table
    .text('description');
  table
    .string('location');
  table
    .integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  table
    .timestamp('createdAt')
    .defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTableIfExists('jobs');
