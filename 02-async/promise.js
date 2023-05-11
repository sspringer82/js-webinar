function doSomething(value, time = 100, isError = false) {
  // 1. Promise zurückgeben
  return new Promise((resolve, reject) => {
    // 2. asynchrone Operation ausführen
    setTimeout(() => {
      // 3. Ergebnis mitteilen mit resolve oder reject
      if (isError) {
        reject(value); // fehlschlag
      } else {
        resolve(value); // erfolg
      }
    }, time);
  });
}

const value = doSomething('my async value');
console.log(value);

doSomething('myErrorValue', 100, true)
  .then((value) => {
    console.log('Success: ', value);
  })
  .catch((error) => {
    console.error('Failure: ', error);
  });

// Promise Kette
doSomething('v1', 100, true) // file open
  .then((v1) => {
    console.log(v1);
    return doSomething('v2'); // file read
  })
  .then((v2) => {
    console.log(v2);
    return doSomething('v3'); // file close
  })
  .then((v3) => {
    console.log(v3);
  })
  .catch((error) => {
    console.error('an error happened');
    console.error(error);
  });
