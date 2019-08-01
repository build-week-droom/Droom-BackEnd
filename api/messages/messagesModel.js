const db = require('../../config/dbConfig');

function get(matchId) {
  return db('messages')
    .select([
      'messages.id',
      'matches.id as matchId',
      'userSent.id as sentById',
      'userSent.name as sentByName',
      'jobSeeker.id as jobSeekerId',
      'jobSeeker.name as jobSeekerName',
      'company.id as companyId',
      'company.name as companyName',
      'messages.message',
      'messages.createdAt as createdAt',
    ])
    .join('matches', 'matches.id', 'messages.matchId')
    .where('messages.matchId', matchId)
    .join('users as userSent', 'messages.sentBy', 'userSent.id')
    .join('users as jobSeeker', 'matches.jobSeekerId', 'jobSeeker.id')
    .join('users as company', 'matches.companyId', 'company.id')
    .orderBy('messages.createdAt');
}

// matchId, sentBy, message
async function add(id, sentBy, message) {
  return db('messages')
    .returning('*')
    .insert({ matchId: id, sentBy, message });
}

module.exports = { get, add };
