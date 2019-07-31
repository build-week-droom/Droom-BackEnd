const db = require('../../config/dbConfig');

const selectFields = [
  'matches.id',
  'matches.companyId',
  'cusers.name as companyName',
  'matches.jobSeekerId',
  'jusers.name as jobSeekerName',
  'matches.createdAt',
  'matches.matchedAt',
  'matches.isMatch',
];

function getAll() {
  return db('matches')
    .select(selectFields)
    .join('users as cusers', 'matches.companyId', 'cusers.id')
    .join('users as jusers', 'matches.jobSeekerId', 'jusers.id')
    .where('isMatch', true);
}

function get(authUserId) {
  return db('matches')
    .select(selectFields)
    .join('users as cusers', 'matches.companyId', 'cusers.id')
    .join('users as jusers', 'matches.jobSeekerId', 'jusers.id')
    .where({ jobSeekerId: authUserId, isMatch: true })
    .orWhere({ companyId: authUserId, isMatch: true });
}

async function updateEntry(id) {
  return db('matches')
    .update({
      isMatch: true,
      matchedAt: new Date(),
    })
    .returning('*')
    .where({ id });
}

async function addCompany(authUserId, matchId) {
  /*
    Check if there is an entry that could have been done
    by another user role (Job seeker)
  */
  const entryExists = await db('matches')
    .where({
      companyId: authUserId,
      jobSeekerId: matchId,
    })
    .first();

  // If there is an entry, update the entry to isMatch=true
  if (entryExists) {
    // If there is an entry, update the entry to isMatch=true
    return updateEntry(entryExists.id);
  }

  // If there is no entry, insert a new entry
  return db('matches')
    .returning(['companyId', 'jobSeekerId', 'isMatch', 'createdAt'])
    .insert({
      companyId: authUserId,
      jobSeekerId: matchId,
    });
}

async function addSeeker(authUserId, matchId) {
  /*
    Check if there is an entry that could have been done
    by another user role (Company)
  */
  const entryExists = await db('matches')
    .where({
      companyId: matchId,
      jobSeekerId: authUserId,
    })
    .first();

  if (entryExists) {
    // If there is an entry, update the entry to isMatch=true
    return updateEntry(entryExists.id);
  }

  // If there is no entry, insert a new entry
  return db('matches')
    .returning(['companyId', 'jobSeekerId', 'isMatch', 'createdAt'])
    .insert({
      companyId: matchId,
      jobSeekerId: authUserId,
    });
}

module.exports = {
  getAll,
  get,
  addCompany,
  addSeeker,
};
