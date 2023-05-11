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

// async function gibt immer Promise zurück
async function handleIt() {
  try {
    const promise1 = doSomething('v1'); // file open
    const v1 = await promise1;
    console.log(v1);
    const v2 = await doSomething('v2'); // file read
    console.log(v2);
    const v3 = await doSomething('v3'); // file close
    console.log(v3);
    return [v1, v2, v3];
  } catch (error) {
    console.error('Error: ', error);
  } finally {
    console.log('cleanup');
  }
}

handleIt().then((values) => console.log(values));

Promise.all([handleIt(), handleIt(), handleIt()]).then((values) =>
  console.log('Promise.all: ', values)
);
