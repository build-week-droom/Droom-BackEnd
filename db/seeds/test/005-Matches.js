exports.seed = knex => knex('matches').del().then(() => knex('matches').insert([
  {
    isMatch: true,
    companyId: 1,
    jobSeekerId: 3,
    matchedAt: new Date(),
  },
  {
    isMatch: false,
    companyId: 1,
    jobSeekerId: 4,
  },
  {
    isMatch: true,
    companyId: 2,
    jobSeekerId: 4,
    matchedAt: new Date(),
  },
  {
    isMatch: false,
    companyId: 2,
    jobSeekerId: 3,
  },
]));
