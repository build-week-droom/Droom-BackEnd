const db = require('../../config/dbConfig');

const returnJoinFields = [
  'jobs.id',
  'jobs.title',
  'jobs.description',
  'jobs.location',
  'users.name as company',
  'users.email',
  'jobs.createdAt',
];

function getAll() {
  return db('jobs')
    .select(returnJoinFields)
    .join('users', 'users.id', 'jobs.userId');
}

function getBy(id) {
  return db('jobs')
    .select(returnJoinFields)
    .join('users', 'users.id', 'jobs.userId')
    .where('jobs.id', id)
    .first();
}

function add(job) {
  return db('jobs')
    .returning('*')
    .insert(job);
}

function update(id, changes) {
  return db('jobs')
    .returning('*')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('jobs')
    .where({ id })
    .del();
}

module.exports = {
  getAll,
  add,
  getBy,
  update,
  remove,
};
