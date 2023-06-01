import type { nullableString } from './util/types.js';

type t_size = number; // rename

function add(a: t_size, b: t_size): t_size {
  return a + b;
}

// type alias für eine Funktion
type SubType = (a: number, b: number) => number;

const sub: SubType = function (a, b) {
  return a - b;
};
console.log(sub(2, 1));

// Hilfstyp in einer eigenen Datei (util/types.ts)
function greet(greeting: nullableString): void {
  console.log(greeting);
}

// Erweiterung von Typealiases

type Person = {
  firstname: string;
  age: number;
};

type PersonWithId = Person & {
  id: number;
};

function getString(p: PersonWithId): string {
  return `${p.id} ${p.firstname} (${p.age})`;
}

console.log(getString({ id: 1, firstname: 'Klaus', age: 42 }));

// Interface
interface Vehicle {
  tires: number;
  start: () => void;
}

enum Status {
  Running,
  Stopped,
}

// interfaces können von Klassen implementiert werden
class Car implements Vehicle {
  tires = 4;
  private status: Status = Status.Stopped;
  start() {
    this.status = Status.Running;
  }
  printStatus(): void {
    console.log('Car is ' + Status[this.status]);
  }
}

const myCar = new Car();
myCar.printStatus();
myCar.start();
myCar.printStatus();

// interface merging
interface Animal {
  legCount: number;
}

interface Animal {
  name: string;
}

// ducktyping
function pet(myPet: Animal) {
  console.log(`My Pet: ${myPet.name}`);
}
pet({ legCount: 3, name: 'MyCat' });

class Bird implements Animal {
  legCount = 2;
  name = 'Birdy';
}

const myBirdy = new Bird();
pet(myBirdy);
