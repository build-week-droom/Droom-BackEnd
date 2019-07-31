const matchesRouter = require('express').Router();

const { getMatches, addMatchCompany, addMatchSeeker } = require('./matchesController');

matchesRouter.get('/', getMatches);
matchesRouter.post('/company', addMatchCompany);
matchesRouter.post('/seeker', addMatchSeeker);

module.exports = matchesRouter;
