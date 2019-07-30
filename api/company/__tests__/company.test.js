const supertest = require('supertest');

const server = require('../../server');
const authToken = require('../../../helpers/authToken');

const request = supertest(server);

const fakeToken = authToken.generateToken({
  id: 1,
  email: 'email@email.com',
  isCompany: false,
});

const profile = {
  about: 'test update',
  location: 'LocalHost, PORT, 8080',
  profileImg: '',
};

let company;

beforeAll(async () => {
  const { body } = await request
    .post('/api/auth/login')
    .send({ email: 'testcompany1@test.com', password: 'test' });
  company = body;
});

describe('COMPANY', () => {
  it('[GET] /company Get All Companies', async () => {
    const res = await request
      .get('/api/company')
      .set('Authorization', company.token);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).not.toBeLessThan(2);
  });

  it('Should Validate User Profile Fields', async () => {
    const res = await request
      .put('/api/company')
      .set('Authorization', company.token)
      .send();
    expect(res.status).toBe(422);
    expect(res.body).toEqual({ error: 'about is required' });
  });

  it('[PUT] /company Should Update Company Profile', async () => {
    const res = await request
      .put('/api/company')
      .set('Authorization', company.token)
      .send(profile);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
    expect(res.body.about).toBe(profile.about);
    expect(res.body.about).toBe(profile.about);
    expect(res.body.location).toBe(profile.location);
    expect(res.body.profileImg).toBe(profile.profileImg);
  });

  it('Should Return 404 if Company with id does not exist ', async () => {
    const res = await request.get('/api/company/100');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Company with ID does not exist' });
  });

  it('[GET] /company/id Should GET Company Profile', async () => {
    const res = await request.get('/api/company/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      id: 1,
      name: 'test company1',
      email: 'testcompany1@test.com',
      about: 'test update',
      location: 'LocalHost, PORT, 8080',
      profileImg: '',
    });
    expect(res.body.jobs).toBeInstanceOf(Array);
    expect(res.body.jobs[0].userId).toEqual(1);
  });

  it('Validate Company Role, Reject access if user not Company', async () => {
    const res = await request
      .put('/api/company')
      .set('Authorization', fakeToken)
      .send();
    expect(res.status).toBe(401);
    expect(res.body).toEqual({ error: 'Unauthorized Access' });
  });
});
