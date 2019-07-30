exports.seed = knex => knex('jobs')
  .del()
  .then(() => knex('jobs').insert([
    {
      title: 'Delivery Driver',
      description: 'You’ll play a critical role in delivering on our promise to provide our customers with excellent customer service.',
      location: 'CO, USA',
      userId: 1,
    },
    {
      title: 'Entry Level Marketing and Public Relations',
      description: 'We are actively seeking Entry-Level Professionals for our public relations & sales marketing team!',
      location: 'CA, USA',
      userId: 2,
    },
  ]));
