const Users = require('./authModel');
const { verifyToken } = require('../../helpers/authToken');

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await Users.getBy({ email });
    if (!user) {
      return next();
    }
    throw new Error('User with Email Address Exists');
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await Users.getBy({ email });
    if (user) {
      req.user = user;
      return next();
    }
    throw new Error('User with Email Does Not Exists');
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
};

const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = verifyToken(token);
    req.authUser = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = { checkEmail, validateEmail, validateToken };
