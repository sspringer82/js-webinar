export class Calculator {
  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Not a number');
    }
    // fake it til you make it
    // return 1;
    return a - b;
  }
  mul(a, b) {
    return a * b;
  }
}
