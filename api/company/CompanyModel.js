const db = require('../../config/dbConfig');

const selectFields = [
  'users.id',
  'users.name',
  'users.email',
  'cp.about',
  'cp.location',
  'cp.profileImg',
];

function getAll() {
  return db('companyProfiles as cp')
    .select(selectFields)
    .join('users', 'users.id', 'cp.userId');
}

function get(id) {
  return db('companyProfiles as cp')
    .select(['userId as id', 'about', 'location', 'profileImg'])
    .where('cp.userId', id)
    .first();
}

async function getProfile(id) {
  const profile = await db('companyProfiles as cp')
    .select(selectFields)
    .join('users', 'users.id', 'cp.userId')
    .where('cp.userId', id)
    .first();
  const jobs = await db('jobs').where({ userId: id });

  return { ...profile, jobs };
}

async function updateProfile(id, changes) {
  const [userId] = await db('companyProfiles')
    .where({ userId: id })
    .update(changes)
    .returning('userId');
  const newProfile = await get(userId);
  return newProfile;
}

module.exports = {
  get,
  getAll,
  getProfile,
  updateProfile,
};
