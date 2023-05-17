import { jest } from '@jest/globals';

jest.unstable_mockModule('./database.js', () => ({
  default: class {
    getById = jest
      .fn()
      .mockResolvedValue({ firstname: 'Klaus', lastname: 'Müller' });
  },
}));
const { createUsername } = await import('./index.js');

describe('createUsername', () => {
  it('should create the username', () => {
    const username = createUsername(2);
    expect(username).resolves.toBe('Kmüller');
  });
});
