// weiches Typsystem
let myVar = 42;
myVar = true;
myVar = 'Hallo Welt';

// primivtive types => by-value

// Zeichenketten
const string1 = "Double 'Quoted'";
const string2 = 'Single "Quoted"';
const templateString = `strangely 
${string1.toUpperCase()}
Quoted`;

console.log(
  'Typeof string: ',
  typeof string1,
  typeof string2,
  typeof templateString
);

// Zahlen
const n1 = 42;
const n2 = 3.14;
const n3 = 4e14;
const n4 = 0o24;
const n5 = 0xaf43;
const n6 = 0b010;

console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991
console.log(
  'max int +1 === max int +2',
  Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2
);

// console.log(-42 / 0);

// Bigint
const bi = BigInt(42);
console.log(typeof bi);

const bi1 = BigInt(Number.MAX_SAFE_INTEGER);
const bi2 = BigInt(Number.MAX_SAFE_INTEGER);
console.log('bi1 === bi2', bi1 + 1n === bi2 + 2n);
// console.log(bi1 ** bi2);

// boolean
// Truthy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
const b1 = true;
const b2 = false;

// typecast
if (b1) {
  console.log('true');
} else {
  console.log('false');
}

console.log("'1' == 1", '1' == 1);
console.log("'1' === 1", '1' === 1);

// undefined und null - Abwesenheit eines Wertes
const u1 = undefined; // nicht tun - gehört der engine - uninitialisierte Variablen, uninitialisierte Parameter (leere), kein Rückgabewert
const u2 = null; // häufig als Initialwert

if (u1 === undefined) {
  console.log('undefined');
}

// Symbol
const s = Symbol('Klaus');
console.log(s);
console.log(Symbol.iterator);

// composite types => by-reference

// Object
const obj1 = {
  name: 'Klaus',
  sayHello() {
    return 'Hello';
  },
};
console.log('obj1.name', obj1.name);
console.log('obj1.sayHello()', obj1.sayHello());
const obj2 = new Object();
obj2.name = 'Klaus';

// variabler eigenschaftszugriff
const myProperty = 'name';
console.log('obj1[myProperty] ', obj1[myProperty]);

// Array
const array1 = [1, '2', ['a', 'b', 'c']];
console.log(array1[2][1]);

const array2 = new Array(10);
console.log(array2.length, array2);
