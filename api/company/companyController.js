const Company = require('./CompanyModel');

function getCompanyProfile(req, res) {
  return res.status(200).json(req.company);
}

async function updateCompanyProfile(req, res) {
  const { body, authUser } = req;
  try {
    const profileChanges = await Company.updateProfile(authUser.id, body);
    return res.status(200).json(profileChanges);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { getCompanyProfile, updateCompanyProfile };
