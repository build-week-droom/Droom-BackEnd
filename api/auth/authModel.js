const db = require('../../config/dbConfig');
const generatePassword = require('../../helpers/generatePassword');

const returnFields = ['id', 'name', 'email', 'isCompany', 'createdAt'];

async function add(user) {
  const [res] = await db('users')
    .returning(returnFields)
    .insert({
      ...user,
      password: generatePassword(user.password),
    });
  if (res.isCompany) {
    await db('companyProfiles').insert({ userId: res.id });
  } else {
    await db('jobSeekerProfiles').insert({ userId: res.id });
  }
  return res;
}

function getBy(filter) {
  return db('users')
    .where(filter)
    .first();
}

module.exports = { add, getBy };
