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
