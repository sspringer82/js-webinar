function* generator() {
  let value = 0;
  while (true) {
    yield Math.floor(Math.random() * 1000);
  }
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);

let count = 0;
for (const value of generator()) {
  console.log(value);
  if (count++ > 10) {
    break;
  }
}

// Manuell geschriebener Iterator
class Counter {
  #value = 0;

  [Symbol.iterator]() {
    return {
      next: () => {
        return {
          done: this.#value === 10,
          value: this.#value++,
        };
      },
    };
  }
}

const counter = new Counter();
for (const v of counter) {
  console.log(v);
}

// Generatorbasierter Iterator
class Counter2 {
  #value = 0;
  #max = 10;

  *[Symbol.iterator]() {
    while (this.#value++ < this.#max) {
      yield this.#value;
    }
  }
}

console.log('Counter2');
const counter2 = new Counter2();
for (const v of counter2) {
  console.log(v);
}

// async iterators
function fetchData(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('MyData' + n);
    }, (10 - n) * 100);
  });
}

class AsyncLoader {
  *[Symbol.iterator]() {
    yield fetchData(1);
    yield fetchData(2);
    yield fetchData(3);
  }
}

const asyncLoader = new AsyncLoader();

for await (const data of asyncLoader) {
  console.log(data);
}
