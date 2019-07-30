const companyRouter = require('express').Router();

const { getAllCompanies, getCompanyProfile, updateCompanyProfile } = require('./companyController');
const { checkCompanyExists, validateCompanyRole } = require('./companyMiddleware');
const { validateToken } = require('../auth/authMiddleware');
const validate = require('../../helpers/validate');
const profileSchema = require('./companySchema');

companyRouter.get('/', getAllCompanies);
companyRouter.get('/:id', checkCompanyExists, getCompanyProfile);
companyRouter.put('/', validateToken, validateCompanyRole, validate(profileSchema), updateCompanyProfile);

module.exports = companyRouter;
