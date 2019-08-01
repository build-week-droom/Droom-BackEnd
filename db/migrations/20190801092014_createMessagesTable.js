exports.up = knex => knex.schema.createTable('messages', (table) => {
  table.increments();
  table
    .integer('matchId')
    .unsigned()
    .references('id')
    .inTable('matches')
    .onDelete('CASCADE');
  table
    .integer('sentBy')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
  table.text('message').notNullable();
  table.timestamp('createdAt').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema
  .dropTableIfExists('messages');
