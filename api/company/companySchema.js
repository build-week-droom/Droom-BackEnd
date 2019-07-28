const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
  about: Joi.string().required(),
  location: Joi.string().required(),
  profileImg: Joi.string().allow(''),
});
