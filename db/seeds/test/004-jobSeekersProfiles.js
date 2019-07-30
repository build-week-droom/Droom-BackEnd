exports.seed = knex => knex('jobSeekerProfiles')
  .del()
  .then(() => knex('jobSeekerProfiles').insert([
    {
      interests: 'Technical Writing, Machine Learning',
      pastExperience: 'Web development with Python',
      location: '',
      profileImg: '',
      userId: 3,
    },
    {
      interests: 'Traveling, Data Analytics',
      pastExperience: '',
      location: 'Lagos, Nigeria',
      profileImg: '',
      userId: 4,
    },
  ]));
