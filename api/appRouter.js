const appRouter = require('express').Router();

const authRouter = require('./auth/authRouter');
const companyRouter = require('./company/companyRouter');

appRouter.use('/auth', authRouter);
appRouter.use('/company', companyRouter);

module.exports = appRouter;
