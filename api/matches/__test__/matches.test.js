const supertest = require('supertest');

const server = require('../../server');

const request = supertest(server);

describe('MATCHES', () => {
  it('[GET] /matches Get All Matches for a User', async () => {
    const companyRes = await request
      .post('/api/auth/login')
      .send({ email: 'testcompany1@test.com', password: 'test' });
    const res = await request
      .get('/api/matches')
      .set('Authorization', companyRes.body.token);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].jobSeekerId).toEqual(3);
  });

  it('[POST] /matches/company Company Should add a JobSeeker Match', async () => {
    const companyRes = await request
      .post('/api/auth/login')
      .send({ email: 'testcompany2@test.com', password: 'test' });
    const res = await request
      .post('/api/matches/company')
      .set('Authorization', companyRes.body.token)
      .send({ match: 3 });
    const yourMatches = await request
      .get('/api/matches')
      .set('Authorization', companyRes.body.token);
    expect(res.status).toBe(201);
    expect(res.body.companyId).toBe(2);
    expect(res.body.jobSeekerId).toBe(3);
    expect(res.body.isMatch).toBe(true);
    expect(yourMatches.body).toHaveLength(2);
  });

  it('[POST] /matches/seeker Job Seeker Should add a Company Match', async () => {
    const jobSeekerRes = await request
      .post('/api/auth/login')
      .send({ email: 'testjobseeker2@test.com', password: 'test' });
    const res = await request
      .post('/api/matches/seeker')
      .set('Authorization', jobSeekerRes.body.token)
      .send({ match: 5 });
    const yourMatches = await request
      .get('/api/matches')
      .set('Authorization', jobSeekerRes.body.token);
    expect(res.status).toBe(201);
    expect(res.body.companyId).toBe(5);
    expect(res.body.jobSeekerId).toBe(4);
    expect(res.body.isMatch).toBe(false);
    expect(yourMatches.body).toHaveLength(1);
  });
});
