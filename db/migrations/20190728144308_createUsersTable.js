exports.up = knex => knex.schema.createTable('users', (table) => {
  table
    .increments();
  table
    .string('name', 128)
    .notNullable();
  table
    .string('email', 128)
    .unique()
    .notNullable();
  table
    .string('password', 128)
    .notNullable();
  table
    .boolean('isCompany', 5)
    .defaultTo(false);
  table
    .timestamp('createdAt')
    .defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTableIfExists('users');
