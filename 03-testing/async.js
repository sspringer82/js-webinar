export function doSomethingAsync(value, time, isError) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) {
        reject(value);
      } else {
        resolve(value);
      }
    }, time);
  });
}
