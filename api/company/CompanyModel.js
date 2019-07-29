const db = require('../../config/dbConfig');

function getProfile(id) {
  return db('companyProfiles as cp')
    .select([
      'users.id',
      'users.name',
      'users.email',
      'cp.about',
      'cp.location',
      'cp.profileImg',
    ])
    .join('users', 'users.id', 'cp.userId')
    .where('cp.userId', id)
    .first();
}

async function updateProfile(id, changes) {
  const [userId] = await db('companyProfiles')
    .where({ userId: id })
    .update(changes)
    .returning('userId');
  const newProfile = await getProfile(userId);
  return newProfile;
}

module.exports = { getProfile, updateProfile };
