const companyRouter = require('express').Router();

const { getCompanyProfile, updateCompanyProfile } = require('./companyController');
const { checkCompanyExists } = require('./companyMiddleware');
const { validateToken } = require('../auth/authMiddleware');
const validate = require('../../helpers/validate');
const profileSchema = require('./companySchema');

companyRouter.get('/:id', checkCompanyExists, getCompanyProfile);
companyRouter.put('/', validateToken, validate(profileSchema), updateCompanyProfile);

module.exports = companyRouter;
