export function fizzBuzz(n) {
  if (n % 15 === 0) {
    return 'fizzbuzz';
  } else if (n % 5 === 0) {
    return 'buzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else {
    return n;
  }
}
