exports.seed = knex => knex('jobSeekerProfiles')
  .del()
  .then(() => knex('jobSeekerProfiles').insert([
    {
      interests: 'Technical Writing, Machine Learning',
      pastExperience: 'Web development with Python',
      location: '',
      profileImg: 'https://res.cloudinary.com/elbon/image/upload/v1564503613/droom_dev/albert-dera-ILip77SbmOE-unsplash.jpg',
      userId: 3,
    },
    {
      interests: 'Traveling, Data Analytics',
      pastExperience: '',
      location: 'Lagos, Nigeria',
      profileImg: 'https://res.cloudinary.com/elbon/image/upload/v1564503614/droom_dev/austin-distel-7uoMmzPd2JA-unsplash.jpg',
      userId: 4,
    },
    {
      interests: 'Photography',
      pastExperience: 'Quality Assurance',
      location: '',
      profileImg: 'https://res.cloudinary.com/elbon/image/upload/v1564503613/droom_dev/candice-picard-aF7z-pJjG_c-unsplash.jpg',
      userId: 2,
    },
    {
      interests: 'Horseback riding, BlockChain',
      pastExperience: 'Devops',
      location: '',
      profileImg: 'https://res.cloudinary.com/elbon/image/upload/v1564503614/droom_dev/gregory-hayes-T6LP1Nh2nGk-unsplash.jpg',
      userId: 1,
    },
  ]));
