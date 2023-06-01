function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 2));

const sub: (a: number, b: number) => number = function (a, b) {
  return a - b;
};
console.log(sub(2, 1));

const mul = (a: number, b: number): number => {
  return a * b;
};
console.log(mul(2, 2));

// rest parameters
function summarize(a: number, ...others: number[]): number {
  return others.reduce((prev, curr) => prev + curr, a);
}
console.log(summarize(1, 2, 3));

// spread
const input = [1, 2, 3];
const value = summarize(4, ...input); // spread nicht in Kombination mit fixen Parametern
console.log(value);

// nicht zu wenige oder zu viele parameter
function div(a: number, b: number): number {
  return a / b;
}

// div();
// div(1);
// div(1,2,3);

// optional parameters
function greet(who: string, how?: string): string {
  let greeting = 'Hallo'; // lieber lokale variable as in Parameter schreiben
  if (how !== undefined && how !== '') {
    // if (how) {
    greeting = how;
  }
  return `${greeting} ${who}`;
}

// default parameters
function sayHello(who: string, how = 'hello') {
  return `${how} ${who}`;
}
