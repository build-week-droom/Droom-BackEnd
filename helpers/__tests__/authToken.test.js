const authToken = require('../authToken');

const payload = {
  id: 1,
  email: 'test@test.com',
  isCompany: false,
};

describe('Authorization Token ', () => {
  let token;
  it('Generate Token', async () => {
    token = authToken.generateToken(payload);
    expect(typeof token).toBe('string');
  });
  it('Verify Token', async () => {
    const verify = authToken.verifyToken(token);
    expect(verify.id).toEqual(1);
    expect(verify.email).toEqual('test@test.com');
    expect(verify.isCompany).toBeFalsy();
  });
});
