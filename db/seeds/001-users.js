const generatePassword = require('../../helpers/generatePassword');

exports.seed = knex => knex('users')
  .del()
  .then(() => knex('users').insert([
    {
      name: 'Jason Clemons',
      email: 'jason@email.com',
      password: generatePassword('jasonc'),
      isCompany: false,
    },
    {
      name: 'Tracie Twite',
      email: 'tracie@email.com',
      password: generatePassword('traciet'),
      isCompany: false,
    },
    {
      name: 'Alan Perez',
      email: 'alan@email.com',
      password: generatePassword('alanp'),
      isCompany: false,
    },
    {
      name: 'Noble Obioma',
      email: 'noble@email.com',
      password: generatePassword('nobleo'),
      isCompany: false,
    },
    {
      name: 'LaserCycle USA',
      email: 'lasdercycleusahr@lasdercycleusa.com',
      password: generatePassword('password'),
      isCompany: true,
    },
    {
      name: 'Impulsion Marketing Group',
      email: 'imgroup@impulsion.com',
      password: generatePassword('password'),
      isCompany: true,
    },
    {
      name: 'GE',
      email: 'people@ge.com',
      password: generatePassword('password'),
      isCompany: true,
    },
    {
      name: 'Epic Flight Academy',
      email: 'epicflightacademy@email.com',
      password: generatePassword('password'),
      isCompany: true,
    },
    {
      name: 'La Causa, Inc',
      email: 'hr@lacausa.edu',
      password: generatePassword('password'),
      isCompany: true,
    },
    {
      name: 'Paystack Nigeria',
      email: 'people@paystack.com',
      password: generatePassword('password'),
      isCompany: true,
    },
    {
      name: 'Andela',
      email: 'people@andela.com',
      password: generatePassword('password'),
      isCompany: true,
    },
  ]));
