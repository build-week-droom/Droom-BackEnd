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
    {
      interests: 'Photography',
      pastExperience: 'Quality Assurance',
      location: '',
      profileImg: '',
      userId: 2,
    },
    {
      interests: 'Horseback riding, BlockChain',
      pastExperience: 'Devops',
      location: '',
      profileImg: '',
      userId: 1,
    },
  ]));
