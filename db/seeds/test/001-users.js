const generatePassword = require('../../../helpers/generatePassword');

exports.seed = knex => knex('users')
  .del()
  .then(() => knex('users').insert([
    {
      name: 'test company1',
      email: 'testcompany1@test.com',
      password: generatePassword('test'),
      isCompany: true,
    },
    {
      name: 'test company2',
      email: 'testcompany2@test.com',
      password: generatePassword('test'),
      isCompany: true,
    },
    {
      name: 'test jobseeker1',
      email: 'testjobseeker1@test.com',
      password: generatePassword('test'),
      isCompany: false,
    },
    {
      name: 'test jobseeker2',
      email: 'testjobseeker2@test.com',
      password: generatePassword('test'),
      isCompany: false,
    },
    {
      name: 'test company3',
      email: 'testcompany3@test.com',
      password: generatePassword('test'),
      isCompany: true,
    },
  ]));
