const bcrypt = require('bcryptjs');

const Users = require('./authModel');
const { generateToken } = require('../../helpers/authToken');

async function register(req, res) {
  try {
    const user = await Users.add(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Error Creating User' });
  }
}

async function login(req, res) {
  const { user, body } = req;
  if (bcrypt.compareSync(body.password, user.password)) {
    const token = generateToken(user);
    return res.status(200).json({
      message: `Welcome, ${user.name}!`,
      token,
    });
  }
  return res.status(401).json({ error: 'Incorrect User Credentials' });
}

module.exports = { register, login };
