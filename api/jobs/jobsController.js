const Jobs = require('./jobsModel');

async function getAllJobs(req, res) {
  try {
    const jobs = await Jobs.getAll();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error getting all jobs' });
  }
}

async function getJob(req, res) {
  try {
    const { id } = req.params;
    const job = await Jobs.getBy(id);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Error getting job' });
  }
}

async function createJob(req, res) {
  const newJob = {
    ...req.body,
    userId: req.authUser.id,
  };
  try {
    const [job] = await Jobs.add(newJob);
    return res.status(201).json(job);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateJob(req, res) {
  const { body, authUser, job } = req;
  const jobUpdate = { ...body, userId: authUser.id };
  try {
    const [jobChanges] = await Jobs.update(job.id, jobUpdate);
    return res.status(200).json(jobChanges);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteJob(req, res) {
  const { id } = req.job;
  try {
    await Jobs.remove(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting job' });
  }
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
