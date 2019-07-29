const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
  interests: Joi.string().required(),
  pastExperience: Joi.string().required(),
  location: Joi.string().required(),
  profileImg: Joi.string().allow(''),
});
