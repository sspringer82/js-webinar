function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

const alias = add;
console.log(alias(2, 2)); // function call => return value
console.log(alias); // function object

function doSomething(callback, time = 1000, isError = false) {
  setTimeout(() => {
    // try/catch + asyncronität funktionieren nicht
    // if (isError) {
    //   throw new Error('whoops');
    // }
    let error = null;
    let value = null;
    if (isError) {
      error = new Error('whoops');
    } else {
      value = 2 + 2;
    }
    callback(error, value);
  }, time);
}

function callbackFunction(error, value) {
  if (error) {
    console.log('Error: ', error.message);
    return;
    // throw error;
  }
  console.log('in callback: ', value);
}

console.log('a');
try {
  doSomething(callbackFunction, 100, false);
} catch (e) {
  console.log(
    'Hier komme ich niemals an, weil das throw nicht mit dem synchoronen try/catch arbeitet'
  );
}
console.log('b');

// try {
//   throw new Error('whoops');
// } catch (e) {
//   console.error('Ein Fehler ist aufgetreten: ', e.message);
// }

// Callback Hell
doSomething((e1, v1) => {
  // file open
  console.log(v1);
  doSomething((e2, v2) => {
    // file read
    console.log(v2);
    doSomething((e3, v3) => {
      // file close
      console.log(v3);
    });
  });
});
