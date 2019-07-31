const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET
  || 'Hey, You are not supposed to see this. Im telling yo mama';

module.exports = {
  generateToken: ({ id, email, isCompany }) => {
    const payload = { id, email, isCompany };
    const options = { expiresIn: '7d' };

    return jwt.sign(payload, secret, options);
  },
  verifyToken: token => jwt.verify(token, secret),
};
