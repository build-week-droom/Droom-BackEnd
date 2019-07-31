const Matches = require('./matchesModel');

async function getMatches(req, res) {
  const { id } = req.authUser;
  try {
    const matches = await Matches.get(id);
    return res.status(200).json(matches);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function addMatchCompany(req, res) {
  const {
    authUser: { id },
    body: { match },
  } = req;
  try {
    const [newMatch] = await Matches.addCompany(id, match);
    return res.status(201).json(newMatch);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function addMatchSeeker(req, res) {
  const {
    authUser: { id },
    body: { match },
  } = req;
  try {
    const [newMatch] = await Matches.addSeeker(id, match);
    return res.status(201).json(newMatch);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { getMatches, addMatchCompany, addMatchSeeker };
