const Joi = require('@hapi/joi');

module.exports = reqSchema => (req, res, next) => {
  Joi.validate(req.body, reqSchema, (err) => {
    if (err) {
      return res.status(422).json({
        error: err.details[0].message.replace(/[^a-zA-Z0-9 ]/g, ''),
      });
    }
    return next();
  });
};
