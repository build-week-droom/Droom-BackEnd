exports.seed = knex => knex('matches').del().then(() => knex('matches').insert([
  {
    isMatch: true,
    companyId: 6,
    jobSeekerId: 1,
    matchedAt: new Date(),
  },
  {
    isMatch: false,
    companyId: 7,
    jobSeekerId: 3,
  },
  {
    isMatch: true,
    companyId: 10,
    jobSeekerId: 3,
    matchedAt: new Date(),
  },
  {
    isMatch: false,
    companyId: 5,
    jobSeekerId: 2,
  },
  {
    isMatch: true,
    companyId: 11,
    jobSeekerId: 4,
    matchedAt: new Date(),
  },
  {
    isMatch: true,
    companyId: 5,
    jobSeekerId: 4,
    matchedAt: new Date(),
  },
]));
