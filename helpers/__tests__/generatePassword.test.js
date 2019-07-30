const generatePassword = require('../generatePassword');

describe('Generate Password', () => {
  it('Should Hash Password', () => {
    const password = 'ThisIsMYPassword';
    const hash = generatePassword(password);
    expect(hash).not.toBe(password);
  });
});
