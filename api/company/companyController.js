const Company = require('./CompanyModel');

async function getAllCompanies(req, res) {
  try {
    const companies = await Company.getAll();
    return res.status(200).json(companies);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
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
