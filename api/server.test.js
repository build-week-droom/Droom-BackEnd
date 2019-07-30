const supertest = require('supertest');

const server = require('./server');

const request = supertest(server);

describe('Server ', () => {
  it('[GET] /', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Welcome to Droom API' });
  });
});
