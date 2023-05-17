export function calculate(callback) {
  const result = 40 + 2;
  callback(result);
}

export function calculateWithOther(callback) {
  const result = callback() + 42;
  return result;
}
