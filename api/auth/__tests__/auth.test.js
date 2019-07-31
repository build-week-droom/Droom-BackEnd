const supertest = require('supertest');

const server = require('../../server');

const request = supertest(server);

const user = {
  name: 'John Doe',
  email: 'johnregtest@email.com',
  password: 'johnny',
  isCompany: false,
};

const company = {
  name: 'John Doe',
  email: 'companyregtest@email.com',
  password: 'company',
  isCompany: true,
};

describe('AUTH', () => {
  describe('REGISTER [POST] /register', () => {
    it('Return Validation error if no body ', async () => {
      const res = await request.post('/api/auth/register');
      expect(res.status).toBe(422);
    });
    it('Should register New Job Seeker ', async () => {
      const res = await request.post('/api/auth/register').send(user);
      expect(res.status).toBe(201);
      expect(res.body.name).toBe(user.name);
      expect(res.body.email).toBe(user.email);
      expect(res.body.isCompany).toBeFalsy();
    });
    it('Should register New Company ', async () => {
      const res = await request.post('/api/auth/register').send(company);
      expect(res.status).toBe(201);
      expect(res.body.name).toBe(company.name);
      expect(res.body.email).toBe(company.email);
      expect(res.body.isCompany).toBeTruthy();
    });
    it('Return error if User already exists', async () => {
      const res = await request.post('/api/auth/register').send(user);
      expect(res.status).toBe(409);
      expect(res.body.error).toBe('User with Email Address Exists');
    });
  });

  describe('LOGIN [POST] /login', () => {
    it('Check Email field to be email', async () => {
      const res = await request
        .post('/api/auth/login')
        .send({ email: user.name, password: user.password });
      expect(res.status).toBe(422);
      expect(res.body.error).toBe('email must be a valid email');
    });
    it('Validate if Email exists', async () => {
      const res = await request
        .post('/api/auth/login')
        .send({ email: 'email@email.com', password: user.password });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('User with Email Does Not Exists');
    });
    it('Validate User Password', async () => {
      const res = await request
        .post('/api/auth/login')
        .send({ email: user.email, password: 'wrong' });
      expect(res.status).toBe(401);
      expect(res.body.error).toBe('Incorrect User Credentials');
    });
    it('Should Login User ', async () => {
      const { email, password } = user;
      const res = await request
        .post('/api/auth/login')
        .send({ email, password });
      expect(res.status).toBe(200);
      expect(res.body.message).toBe(`Welcome, ${user.name}!`);
      expect(typeof res.body.token).toBe('string');
    });
  });

  describe('Validate Token', () => {
    it('Should Return 401 if token is not provided', async () => {
      const res = await request.put('/api/company');
      expect(res.status).toBe(401);
    });
  });
});
