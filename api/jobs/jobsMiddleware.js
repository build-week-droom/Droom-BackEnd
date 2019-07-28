const Jobs = require('./jobsModel');

const checkJobExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const job = await Jobs.getBy(id);
    if (job) {
      req.job = job;
      return next();
    }
    throw new Error('Job with ID does not exist');
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = { checkJobExists };
