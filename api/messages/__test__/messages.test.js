const supertest = require('supertest');

const server = require('../../server');

const request = supertest(server);

describe('MESSAGES', () => {
  it('Should Validate Match Exists', async () => {
    const { body } = await request
      .post('/api/auth/login')
      .send({ email: 'testjobseeker2@test.com', password: 'test' });
    const res = await request
      .get('/api/messages/2')
      .set('Authorization', body.token);
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Match with id does not exist' });
  });

  it('Should Get Match Messages where match exists', async () => {
    const { body } = await request
      .post('/api/auth/login')
      .send({ email: 'testcompany2@test.com', password: 'test' });
    const res = await request
      .get('/api/messages/3')
      .set('Authorization', body.token);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body).toHaveLength(3);
    expect(res.body[0].sentByName).toEqual('test company2');
    expect(res.body[0].jobSeekerId).toBe(4);
  });

  it('Should Add Messages from Match', async () => {
    const testMessage = { message: 'This would be the test' };
    const { body } = await request
      .post('/api/auth/login')
      .send({ email: 'testjobseeker1@test.com', password: 'test' });
    const res = await request
      .post('/api/messages/1')
      .set('Authorization', body.token)
      .send(testMessage);
    const matchMessages = await request
      .get('/api/messages/1')
      .set('Authorization', body.token);
    expect(res.status).toBe(201);
    expect(res.body.sentBy).toBe(3);
    expect(res.body.message).toEqual(testMessage.message);
    expect(matchMessages.body).toHaveLength(3);
    expect(matchMessages.body[2].message).toEqual(testMessage.message);
  });
});
