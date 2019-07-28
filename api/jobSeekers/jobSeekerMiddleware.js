const JobSeeker = require('./jobSeekerModel');

const checkUserExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const profile = await JobSeeker.getProfile(id);
    if (profile) {
      req.profile = profile;
      return next();
    }
    throw new Error('Job Seeker with ID does not exist');
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const validateUserRole = (req, res, next) => {
  if (!req.authUser.isCompany) {
    return next();
  }
  return res.status(401).json({ error: 'Unauthorized Access' });
};

module.exports = { checkUserExists, validateUserRole };
