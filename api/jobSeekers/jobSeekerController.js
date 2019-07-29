const JobSeeker = require('./jobSeekerModel');

async function getAllProfiles(req, res) {
  try {
    const jobSeekers = await JobSeeker.getAllProfile();
    return res.status(200).json(jobSeekers);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message });
  }
}

function getProfile(req, res) {
  return res.status(200).json(req.profile);
}

async function updateProfile(req, res) {
  const { body, authUser } = req;
  try {
    const profileChanges = await JobSeeker.updateProfile(authUser.id, body);
    return res.status(200).json(profileChanges);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { getProfile, updateProfile, getAllProfiles };
