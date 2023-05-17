import { jest } from '@jest/globals';
import { calculate, calculateWithOther } from './spies';

describe('Spies', () => {
  it('should call the callback with 42 (inline)', () => {
    calculate((value) => {
      expect(value).toBe(42);
    });
  });

  it('should call the callback with 42 (spy)', () => {
    const callback = jest.fn();
    calculate(callback);
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(42);
  });
});

describe('stub', () => {
  it('should provide 2 and produce the result 44', () => {
    const callback = jest.fn().mockReturnValue(2);
    const result = calculateWithOther(callback);
    expect(result).toBe(44);
  });
});
