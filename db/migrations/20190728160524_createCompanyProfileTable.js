exports.up = knex => knex.schema.createTable('companyProfiles', (table) => {
  table
    .increments();
  table
    .text('about');
  table
    .string('location');
  table
    .string('profileImg');
  table
    .integer('userId')
    .unique()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
});

exports.down = knex => knex.schema
  .dropTableIfExists('companyProfiles');
