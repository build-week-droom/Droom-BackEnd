const db = require('../../config/dbConfig');

const selectFields = [
  'users.id',
  'users.name',
  'users.email',
  'jp.interests',
  'jp.pastExperience',
  'jp.location',
  'jp.profileImg',
];

function getProfile(id) {
  return db('jobSeekerProfiles as jp')
    .select(selectFields)
    .join('users', 'users.id', 'jp.userId')
    .where('jp.userId', id)
    .first();
}

function getAllProfile() {
  return db('jobSeekerProfiles as jp')
    .select(selectFields)
    .join('users', 'users.id', 'jp.userId');
}

async function updateProfile(id, changes) {
  const [userId] = await db('jobSeekerProfiles')
    .where({ userId: id })
    .update(changes)
    .returning('userId');
  const newProfile = await getProfile(userId);
  return newProfile;
}

module.exports = { getProfile, updateProfile, getAllProfile };
