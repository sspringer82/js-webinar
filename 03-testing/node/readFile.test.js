import { jest } from '@jest/globals';

// für Node + ECMAScript Modules
jest.unstable_mockModule('node:fs/promises', () => {
  return {
    readFile: jest.fn().mockResolvedValue('hallo welt'),
  };
});
const { readFromFile } = await import('./readFile.js');

describe('readFile', () => {
  it('should uppercasify first each word', () => {
    const result = readFromFile();
    return expect(result).resolves.toBe('Hallo Welt');
  });
});
