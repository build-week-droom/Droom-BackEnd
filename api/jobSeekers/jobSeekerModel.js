const db = require('../../config/dbConfig');

function getProfile(id) {
  return db('jobSeekerProfiles as jp')
    .select([
      'users.id',
      'users.name',
      'users.email',
      'jp.interests',
      'jp.pastExperience',
      'jp.location',
      'jp.profileImg',
    ])
    .join('users', 'users.id', 'jp.userId')
    .where('jp.userId', id)
    .first();
}

async function updateProfile(id, changes) {
  const [userId] = await db('jobSeekerProfiles')
    .where({ userId: id })
    .update(changes)
    .returning('userId');
  const newProfile = await getProfile(userId);
  return newProfile;
}

module.exports = { getProfile, updateProfile };
