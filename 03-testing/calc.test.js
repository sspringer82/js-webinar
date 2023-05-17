import { Calculator } from './calc.js';

test('it should add 1 and 1 and return 2', () => {
  // tripple A
  // arrange
  const calc = new Calculator();
  // act
  const result = calc.add(1, 1);
  // assert
  expect(result).toBe(2);

  // so nicht! expect((new Calculator()).add(1, 1)).toBe(2);
});

describe('Calculator', () => {
  let calc;

  // beforeAll(() => {})
  beforeEach(() => {
    calc = new Calculator();
  });
  // afterEach(() => {})
  // afterAll(() => {})
  describe('.sub()', () => {
    it('should subtract 1 from 2 and return 1', () => {
      const result = calc.sub(2, 1);
      expect(result).toBe(1);
    });

    // triangulation: 2 Tests für 1 Problem
    it('should subtract 2 from 4 and return 2', () => {
      const result = calc.sub(4, 2);
      expect(result).toBe(2);
    });

    it('should throw an error if 1st param is a string', () => {
      const testingFn = () => calc.sub('1', 2);
      expect(testingFn).toThrow();
      expect(testingFn).toThrow('Not a number');
    });

    it('should throw an error if 2nd params is a string', () => {
      const testingFn = () => calc.sub(1, '2');
      expect(testingFn).toThrow();
    });

    it('should throw an error if both params are strings', () => {
      const testingFn = () => calc.sub('1', '2');
      expect(testingFn).toThrow();
    });

    it('should throw an error if there are strings', () => {
      const testingFn1 = () => calc.sub(1, '2');
      expect(testingFn1).toThrow();
      const testingFn2 = () => calc.sub('1', 2);
      expect(testingFn2).toThrow();
      const testingFn3 = () => calc.sub('1', '2');
      expect(testingFn3).toThrow();
    });
  });

  describe('.mul()', () => {
    it('should mul', () => {
      // fake code coverage
      calc.mul(1, 1);
    });
  });
});
