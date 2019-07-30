const supertest = require('supertest');

const server = require('../../server');
const authToken = require('../../../helpers/authToken');

const request = supertest(server);

const fakeUserToken = authToken.generateToken({
  id: 10,
  email: 'email@email.com',
  isCompany: true,
});

const jobs = {
  jobNew: {
    title: 'Test job Title New',
    description: 'Test Job description New',
    location: 'Test Job Location New',
  },
  jobUpdate: {
    title: 'Test job Title Update',
    description: 'Test Job description Update',
    location: 'Test Job Location Update',
  },
};

let company;

beforeAll(async () => {
  const { body } = await request
    .post('/api/auth/login')
    .send({ email: 'testcompany2@test.com', password: 'test' });
  company = body;
});

describe('JOBS', () => {
  it('Should Validate Job post Fields', async () => {
    const res = await request
      .post('/api/jobs')
      .set('Authorization', company.token)
      .send();
    expect(res.status).toBe(422);
    expect(res.body).toEqual({ error: 'title is required' });
  });

  it('[POST] /jobs Should Add New Job Posting', async () => {
    const res = await request
      .post('/api/jobs')
      .set('Authorization', company.token)
      .send(jobs.jobNew);
    expect(res.status).toBe(201);
    expect(res.body.id).toBe(3);
    expect(res.body.userId).toBe(2);
    expect(res.body.title).toBe(jobs.jobNew.title);
    expect(res.body.description).toBe(jobs.jobNew.description);
    expect(res.body.location).toBe(jobs.jobNew.location);
    expect(res.body).toHaveProperty('createdAt');
  });

  it('Should Validate if Job was posted by User', async () => {
    const res = await request
      .put('/api/jobs/1')
      .set('Authorization', fakeUserToken)
      .send(jobs.jobNew);
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      error: 'You do not have permission for operation',
    });
  });

  it('[PUT] /jobs Should UPDATE Job Posting', async () => {
    const res = await request
      .put('/api/jobs/2')
      .set('Authorization', company.token)
      .send(jobs.jobUpdate);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe(jobs.jobUpdate.title);
    expect(res.body.description).toBe(jobs.jobUpdate.description);
    expect(res.body.location).toBe(jobs.jobUpdate.location);
  });

  it(' [GET] /jobs Should get all jobs', async () => {
    const res = await request
      .get('/api/jobs')
      .set('Authorization', fakeUserToken);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body).toHaveLength(3);
  });

  it('[DELETE] /jobs/id Should DELETE Job Posting', async () => {
    const jobsRes = await request
      .get('/api/jobs')
      .set('Authorization', fakeUserToken);
    const res = await request
      .delete('/api/jobs/3')
      .set('Authorization', company.token);
    expect(res.status).toBe(204);
    expect(res.body.length).not.toEqual(jobsRes.body.length);
    expect(res.body).not.toContain(jobs.jobNew);
  });

  it('Should Return 404 if Job with id does not exist ', async () => {
    const res = await request
      .get('/api/jobs/4')
      .set('Authorization', company.token);
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Job with ID does not exist' });
  });

  it('[GET] /jobs/id Should GET Job Posting', async () => {
    const res = await request
      .get('/api/jobs/2')
      .set('Authorization', company.token);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('description');
    expect(res.body).toHaveProperty('companyId');
    expect(res.body).toHaveProperty('company');
    expect(res.body).toHaveProperty('email');
  });
});
