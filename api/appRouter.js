const appRouter = require('express').Router();

const { validateToken } = require('./auth/authMiddleware');
const authRouter = require('./auth/authRouter');
const companyRouter = require('./company/companyRouter');
const jobsRouter = require('./jobs/jobsRouter');
const jobSeekersRouter = require('./jobSeekers/jobSeekerRouter');
const matchesRouter = require('./matches/matchesRouter');
const messagesRouter = require('./messages/messagesRouter');

appRouter.use('/auth', authRouter);
appRouter.use('/company', companyRouter);
appRouter.use('/jobs', validateToken, jobsRouter);
appRouter.use('/seekers', validateToken, jobSeekersRouter);
appRouter.use('/matches', validateToken, matchesRouter);
appRouter.use('/messages', validateToken, messagesRouter);

module.exports = appRouter;
