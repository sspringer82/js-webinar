// global
global.myName = 'Basti';

// module - im Modulsystem in einer Datei
const myModuleVar = 'in my module';

// function - top level in der funktion, variable nur in der funktion gültig
(function () {
  const myVar = 'my Value';
})();
// console.log(myVar);

// block - im aktuellen Block
for (let i = 0; i < 10; i++) {
  console.log('loop');
}
// console.log(i);

// auch try ist ein block
try {
  let result = 'foo';
  // magic
  console.log(result);
} catch (e) {
  console.error(e);
}

// global: global + window
// module: var, let, const
// function: var, let, const
// block: let, const
// closure

// closure: funktion und ihr umgebender context
function outer() {
  let myValue = 'xxxx';
  return {
    getValue() {
      return myValue;
    },
    setValue(value) {
      myValue = value;
    },
  };
}
const { getValue, setValue } = outer();

console.log(getValue());
setValue('123');
console.log(getValue());
// console.log(myValue);
