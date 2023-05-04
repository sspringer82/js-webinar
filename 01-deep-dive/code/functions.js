// named function
add(2, 3);
function add(a, b) {
  return a + b;
}

const result = add(1, 1);
console.log(result);

const result2 = add(); // add(undefined, undefined) => NaN
console.log(result2);
const result3 = add(1); // add(1, undefined) => NaN
console.log(result3);
const result4 = add(1, 1); // add(1, 1) => 2
console.log(result4);
const result5 = add(1, 1, 1); // add(1, 1) => 2
console.log(result5);

function sub(a, b) {
  return a - b - arguments[2]; // Arguments bitte auch vergessen
}

const result6 = sub(3, 2, 1); // sub(3,2)
console.log(result6);

// Rest Operator
function summarize(a, b, ...otherArgs) {
  return otherArgs.reduce((prev, curr) => prev + curr, a + b);
}
const result7 = summarize(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log('summarize: ', result7);

console.log(summarize(1, 2)); // 3
console.log(summarize(1, 2, 3)); // 6
console.log(summarize(1)); // NaN

// Spread Operator
const values = [1, 2, 3];
const result8 = summarize(...values);
console.log('spread: ', result8);

// clone object
const lisa = {
  name: 'lisa',
  address: {
    city: 'Hamburg',
  },
};

const lisasClone = { ...lisa };
lisasClone.name = 'Maria';
lisasClone.address.city = 'München';

const lisasSecondClone = structuredClone(lisa);
lisasSecondClone.address.city = 'Berlin';
console.log(lisa);
console.log(lisasClone);
console.log(lisasSecondClone);

// anonyme funktion
// anonymousAdd(2, 3); referenceError
const anonymousAdd = function (a, b) {
  return a + b;
};
console.log(anonymousAdd(1, 2));

// IIFE
(function () {
  console.log('IIFE');
})();

// block scope
{
  console.log('in block');
}

// Arrow Function
const arrowAdd = (a, b) => {
  return a + b;
};
console.log(arrowAdd(1, 2));

const arr = [1, 2, 3];
const mapResult = arr.map((value) => value * value);
console.log(mapResult);

// 1. Parameterklammern sind bei 1 parameter optional
// 2. Geschweifte Klammern bei 1 statement optional
// 3. Return bei 1 Statement optional
// 4. this = der umgebende Kontext

function addTo10(a, b = 10, c = add(a, b)) {
  return a + b + c;
}
console.log(addTo10(1));
console.log(addTo10(1, undefined, 12));
console.log(addTo10(42));
