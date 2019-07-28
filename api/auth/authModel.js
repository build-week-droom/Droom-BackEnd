const db = require('../../config/dbConfig');
const generatePassword = require('../../helpers/generatePassword');

const returnFields = ['id', 'name', 'email', 'isCompany', 'createdAt'];

function add(user) {
  return db('users')
    .returning(returnFields)
    .insert({
      ...user,
      password: generatePassword(user.password),
    });
}

function getBy(filter) {
  return db('users')
    .where(filter)
    .first();
}

module.exports = { add, getBy };
