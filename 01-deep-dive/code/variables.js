// const PI = 3.14;
const myVar1 = 'foo'; // konstante blockscoped variable - by-value = konstant - by-reference = referenz konstant
let myVar2 = 'bar'; // blockscoped variable
var myVar3 = 'baz'; // functionscoped variable - BITTE SOFORT VERGESSEN

const constStr = 'foo';
// constStr = 'bar';
let varString = 'foo';
varString = 'bar';

// const klaus = {
//   name: 'Klaus',
// };

klaus = {
  name: 'Petra',
};

klaus.name = 'Maria';

console.log(klaus.name);
