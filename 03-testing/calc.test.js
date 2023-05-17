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
  describe('.sub()', () => {
    let calc;

    // beforeAll(() => {})
    beforeEach(() => {
      calc = new Calculator();
    });
    // afterEach(() => {})
    // afterAll(() => {})

    it('should subtract 1 from 2 and return 1', () => {
      const result = calc.sub(2, 1);
      expect(result).toBe(1);
    });

    // triangulation: 2 Tests für 1 Problem
    it('should subtract 2 from 4 and return 2', () => {
      const result = calc.sub(4, 2);
      expect(result).toBe(2);
    });
  });
});
