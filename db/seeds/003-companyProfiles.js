exports.seed = knex => knex('companyProfiles')
  .del()
  .then(() => knex('companyProfiles').insert([
    {
      about: 'At LaserCycle USA, we know that finding the best document management solution for your organization means reducing costs without sacrificing access to information.',
      location: 'Louisville, CO, USA',
      profileImg: '',
      userId: 5,
    },
    {
      about: 'Impulsion Marketing Group’s promotions build more momentum for big results.',
      location: 'Huntington Beach, CA, USA',
      profileImg: '',
      userId: 6,
    },
    {
      about: 'Who We Are GE is committed to supporting the sustainable development of Nigeria with advanced infrastructure technologies, services and solutions.',
      location: 'Boston, USA',
      profileImg: '',
      userId: 7,
    },
    {
      about: 'Our mission is to provide an unparalleled pathway to achieving professional pilot dreams through innovative flight education and technologically-advanced aviation resources.',
      location: 'New Smyrna Beach, FL, USA',
      profileImg: '',
      userId: 8,
    },
    {
      about: 'La Causa Inc is a drug and alcohol addiction rehab center. Call today for help and start your journey towards life long sobriety.',
      location: 'Milwaukee, WI, USA',
      profileImg: '',
      userId: 9,
    },
    {
      about: 'Paystack is the fastest, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.',
      location: 'Lagos, Nigeria',
      profileImg: '',
      userId: 10,
    },
    {
      about: 'Andela invests in Africa’s most talented software engineers to help companies solve the technical talent shortage and build high-performing distributed engineering teams.',
      location: 'Lagos, Nigeria',
      profileImg: '',
      userId: 11,
    },
  ]));
