import { doSomethingAsync } from './async.js';

describe('async', () => {
  it.skip('should work with done', (done) => {
    doSomethingAsync('Hallo welt', 100, false).then((value) => {
      expect(value).toBe('Hallo welt');
      done(); // muss innerhalb von 5s passieren
    });
  });

  it('should work with async/await', async () => {
    const result = await doSomethingAsync('test', 100, false);
    expect(result).toBe('test');
  });

  it('should work with resolves', () => {
    const promise = doSomethingAsync('test', 100, false);
    return expect(promise).resolves.toBe('test');
  });

  it('should work with failure', async () => {
    let error = '';
    try {
      await doSomethingAsync('failure', 1, true);
    } catch (e) {
      error = e;
    }

    expect(error).toBe('failure');
  });

  it('should work with rejects', () => {
    const promise = doSomethingAsync('failure', 1, true);
    return expect(promise).rejects.toBe('failure');
  });
});
