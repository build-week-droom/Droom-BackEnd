exports.up = knex => knex.schema.createTable('matches', (table) => {
  table
    .increments();
  table
    .integer('companyId')
    .unsigned()
    .references('userId')
    .inTable('companyProfiles')
    .onDelete('CASCADE');
  table
    .integer('jobSeekerId')
    .unsigned()
    .references('userId')
    .inTable('jobSeekerProfiles')
    .onDelete('CASCADE');
  table
    .timestamp('createdAt')
    .defaultTo(knex.fn.now());
  table
    .timestamp('matchedAt');
  table
    .boolean('isMatch')
    .defaultTo(false);
});

exports.down = knex => knex.schema
  .dropTableIfExists('matches');
