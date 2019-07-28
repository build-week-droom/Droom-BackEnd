const appRouter = require('express').Router();

const authRouter = require('./auth/authRouter');

appRouter.use('/auth', authRouter);

module.exports = appRouter;
