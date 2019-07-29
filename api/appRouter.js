const appRouter = require('express').Router();

const authRouter = require('./auth/authRouter');
const companyRouter = require('./company/companyRouter');
const { validateToken } = require('./auth/authMiddleware');
const jobsRouter = require('./jobs/jobsRouter');
const jobSeekersRouter = require('./jobSeekers/jobSeekerRouter');

appRouter.use('/auth', authRouter);
appRouter.use('/company', companyRouter);
appRouter.use('/jobs', validateToken, jobsRouter);
appRouter.use('/seekers', validateToken, jobSeekersRouter);

module.exports = appRouter;
