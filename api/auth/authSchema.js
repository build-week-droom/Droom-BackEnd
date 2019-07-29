const Joi = require('@hapi/joi');

module.exports = {
  loginSchema: Joi.object().keys({
    email: Joi.string()
      .min(6)
      .email()
      .required(),
    password: Joi.string().required(),
  }),
  registerSchema: Joi.object().keys({
    name: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(6)
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
    isCompany: Joi.boolean().required(),
  }),
};
