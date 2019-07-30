exports.seed = knex => knex('companyProfiles')
  .del()
  .then(() => knex('companyProfiles').insert([
    {
      about: 'This is about Company 1',
      location: 'Louisville, CO, USA',
      profileImg: '',
      userId: 1,
    },
    {
      about: 'This is about Company Test 2.',
      location: 'Huntington Beach, CA, USA',
      profileImg: '',
      userId: 2,
    },
  ]));
