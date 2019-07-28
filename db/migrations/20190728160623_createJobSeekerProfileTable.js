exports.up = knex => knex.schema.createTable('jobSeekerProfiles', (table) => {
  table
    .increments();
  table
    .text('interests');
  table
    .text('pastExperience');
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
  .dropTableIfExists('jobSeekerProfiles');
