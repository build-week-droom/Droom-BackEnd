const authRouter = require('express').Router();

const { register, login } = require('./authController');
const validate = require('../../helpers/validate');
const { loginSchema, registerSchema } = require('./authSchema');
const { checkEmail, validateEmail } = require('./authMiddleware');

authRouter.post('/register', validate(registerSchema), checkEmail, register);
authRouter.post('/login', validate(loginSchema), validateEmail, login);

module.exports = authRouter;
