const Company = require('./CompanyModel');

const checkCompanyExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const company = await Company.get(id);
    if (company) {
      req.company = company;
      return next();
    }
    throw new Error('Company with ID does not exist');
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const validateCompanyRole = (req, res, next) => {
  if (req.authUser.isCompany) {
    return next();
  }
  return res.status(401).json({ error: 'Unauthorized Access' });
};


module.exports = { checkCompanyExists, validateCompanyRole };
