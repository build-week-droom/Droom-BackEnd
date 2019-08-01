const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
  message: Joi.string()
    .min(1)
    .required(),
});
