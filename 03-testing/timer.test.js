import { jest } from '@jest/globals';

import { doSomethingAsync } from './async.js';

describe('timers', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it('should reduce the runtime of the doSomethingAsync test', async () => {
    const promise = doSomethingAsync('Hallo Welt', 10_000, false);

    jest.advanceTimersByTime(10_000);

    expect(await promise).toBe('Hallo Welt');
  });
});
