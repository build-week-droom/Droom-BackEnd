const jobsRouter = require('express').Router();

const jobs = require('./jobsController');
const validate = require('../../helpers/validate');
const jobSchema = require('./jobSchema');
const { checkJobExists, checkIfJobByUser } = require('./jobsMiddleware');
const { validateCompanyRole } = require('../company/companyMiddleware');

jobsRouter.get('/', jobs.getAllJobs);
jobsRouter.get('/:id', checkJobExists, jobs.getJob);
jobsRouter.post('/', validateCompanyRole, validate(jobSchema), jobs.createJob);
jobsRouter.put(
  '/:id',
  validateCompanyRole,
  checkJobExists,
  checkIfJobByUser,
  validate(jobSchema),
  jobs.updateJob,
);
jobsRouter.delete(
  '/:id',
  validateCompanyRole,
  checkJobExists,
  checkIfJobByUser,
  jobs.deleteJob,
);

module.exports = jobsRouter;
