const jobSeekersRouter = require('express').Router();

const { getProfile, updateProfile, getAllProfiles } = require('./jobSeekerController');
const { checkUserExists, validateUserRole } = require('./jobSeekerMiddleware');
const { validateToken } = require('../auth/authMiddleware');
const validate = require('../../helpers/validate');
const profileSchema = require('./jobSeekerSchema');

jobSeekersRouter.get('/', validateToken, getAllProfiles);
jobSeekersRouter.get('/:id', validateToken, checkUserExists, getProfile);
jobSeekersRouter.put('/', validateToken, validateUserRole, validate(profileSchema), updateProfile);

module.exports = jobSeekersRouter;
