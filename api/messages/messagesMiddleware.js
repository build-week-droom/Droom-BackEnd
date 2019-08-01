const Match = require('../matches/matchesModel');

const checkIfMatch = async (req, res, next) => {
  const { params, authUser } = req;
  try {
    const [match] = await Match.getMatch(authUser.id, params.id);
    if (match) {
      return next();
    }
    throw new Error('Match with id does not exist');
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = { checkIfMatch };
