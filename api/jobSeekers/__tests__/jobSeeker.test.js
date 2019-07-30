const supertest = require('supertest');

const server = require('../../server');
const authToken = require('../../../helpers/authToken');

const request = supertest(server);

const fakeToken = authToken.generateToken({
  id: 1,
  email: 'email@email.com',
  isCompany: true,
});

const profile = {
  interests: 'Data Analytics, BlockChain',
  pastExperience: 'Devops',
  location: 'LocalHost, Port, 8080',
  profileImg: '',
};

let user;

beforeAll(async () => {
  const { body } = await request
    .post('/api/auth/login')
    .send({ email: 'testjobseeker1@test.com', password: 'test' });
  user = body;
});

describe('JOB SEEKERS', () => {
  it('[GET] /seekers Should GET All Job Seeker Profile', async () => {
    const res = await request
      .get('/api/seekers')
      .set('Authorization', fakeToken);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).not.toBeLessThan(2);
  });

  it('Should Validate User Profile Fields', async () => {
    const res = await request
      .put('/api/seekers')
      .set('Authorization', user.token)
      .send();
    expect(res.status).toBe(422);
    expect(res.body).toEqual({ error: 'interests is required' });
  });

  it('Should Update Job Seeker Profile', async () => {
    const res = await request
      .put('/api/seekers')
      .set('Authorization', user.token)
      .send(profile);
    expect(res.status).toBe(200);
    expect(res.body.interests).toBe(profile.interests);
    expect(res.body.pastExperience).toBe(profile.pastExperience);
    expect(res.body.location).toBe(profile.location);
    expect(res.body.profileImg).toBe(profile.profileImg);
  });

  it('Should Return 404 if Job Seeker with id does not exist ', async () => {
    const res = await request
      .get('/api/seekers/100')
      .set('Authorization', fakeToken);
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Job Seeker with ID does not exist' });
  });

  it('[GET] /seekers/id Get job seeker by id', async () => {
    const res = await request
      .get('/api/seekers/3')
      .set('Authorization', user.token);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('interests');
    expect(res.body).toHaveProperty('pastExperience');
    expect(res.body).toHaveProperty('location');
    expect(res.body).toHaveProperty('profileImg');
    expect(res.body.interests).toEqual(profile.interests);
  });

  it('Validate Job seeker Role, Reject access if user not Job seeker', async () => {
    const res = await request
      .put('/api/seekers')
      .set('Authorization', fakeToken)
      .send();
    expect(res.status).toBe(401);
    expect(res.body).toEqual({ error: 'Unauthorized Access' });
  });
});
