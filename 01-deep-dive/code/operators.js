// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

// == vs === und != vs !==

const value1 = 42 ** 5;
const value2 = Math.pow(42, 5);

const person = {
  name: 'Klaus',
  cat: {
    name: 'Citty',
  },
};

// delete person.name;

console.log('cat name: ', person.cat.name);
console.log('cat age: ', person.cat.age);
// console.log('address city: ', person.address.city);
console.log('address city: ', person && person.address && person.address.city);
console.log('address city: ', person.address?.city); // Optional chaining
if (person && person.address) {
  console.log('address city: ', person.address.city);
}

// nullish coalescing
console.log(false || 'foo');
console.log(false ?? 'foo');
console.log(null || 'foo');
console.log(null ?? 'foo');
console.log(undefined || 'foo');
console.log(undefined ?? 'foo');

// destructuring
const desObj = {
  myProp: 'myValue',
};

// const myProp = desObj.myProp;
const { myProp } = desObj;

const myName = person.name;
const myCat = person.cat.name;

const {
  name: myName2,
  cat: { name: myCat2 },
} = person;
console.log(myName2, myCat2);

const myArr = ['a', 'b', 'c'];
const [, , third] = myArr;
console.log(third);

function doSomething({ cat: { name } }) {
  // console.log(person.cat.name)
  console.log(name);
}
doSomething(person);
