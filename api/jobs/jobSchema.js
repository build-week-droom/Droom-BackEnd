const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
  title: Joi.string()
    .min(6)
    .required(),
  description: Joi.string()
    .min(6)
    .required(),
  location: Joi.string()
    .min(3)
    .required(),
});
