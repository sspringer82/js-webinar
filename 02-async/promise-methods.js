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

const p1 = doSomething('v1');
const p2 = doSomething('v2');
const p3 = doSomething('v3');

// all
/*
Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values);
  })
  .catch((values) => console.log('Error: ', values));
  */

// allSettled
/* 
Promise.allSettled([p1, p2, p3]).then((values) => {
   console.log(values);
 });
 */

// any
/*
Promise.any([p1, p2, p3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });
  */

// race
/*
Promise.race([p1, p2, p3]).then((values) => {
  console.log(values);
});
*/
