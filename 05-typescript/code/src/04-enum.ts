enum Fruit {
  Apple,
  Pear,
  Pineapple,
  Raspberry,
  Strawberry,
}

function eat(fruit: Fruit): void {
  console.log(`eating: ${fruit}`);
}

eat(Fruit.Strawberry);

function eatWhat(fruit: Fruit): void {
  console.log(`eating: ${Fruit[fruit]}`);
}

eatWhat(Fruit.Pineapple);

function getType(fruit: Fruit): string {
  switch (fruit) {
    case Fruit.Raspberry:
      return 'Berry';
    case Fruit.Pineapple:
      return 'something different';
    default:
      return 'not a fruit at all';
  }
}

console.log(getType(Fruit.Raspberry));
console.log(getType(Fruit.Pineapple));
console.log(getType(Fruit.Apple));

enum Veggy {
  Tomato = 'Tomato',
  Cucumber = 'Cucumber',
  Potato = 'Potato',
}

function fry(what: Veggy) {
  console.log(`frying: ${what}`);
}
fry(Veggy.Potato);
