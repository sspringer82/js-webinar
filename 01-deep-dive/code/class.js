class Person {
  firstname = '';
  lastname = '';
  #age = 0;

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  set age(value) {
    if (value < 0 || value > 100) {
      throw new Error('Too young or too old');
    }
    this.#age = value;
  }

  greet(what) {
    return `${what} ${this.fullName} (${this.#age})`;
  }
}

class User extends Person {
  static count = null;
  static {
    this.count = 7;
  }

  password = '';
  constructor(firstname, lastname, password) {
    super(firstname, lastname);
    this.password = password;
  }

  createUsername() {
    return this.firstname[0].toUpperCase() + this.lastname;
  }

  static createUser(fn, ln, pw) {
    this.count++;
    return new this(fn, ln, pw);
  }
}

const klaus = new Person('Klaus', 'Müller');
klaus.age = 42;
console.log(klaus.greet('Hallo'));

const lisa = new User('Lisa', 'Meier', 'secret');
lisa.age = 25;
console.log(lisa.greet('guten abend'));

const moritz = User.createUser('Moritz', 'Schmitt', 'xxxx');
console.log(moritz.greet('guten abend'));

console.log(User.count);

function Animal(type, name) {
  this.type = type;
  this.name = name;
}

Animal.prototype.whatAreYou = function () {
  return `I am a ${this.type} and my name is ${this.name}`;
};

const dog = new Animal('dog', 'wuffi');
console.log(dog.whatAreYou());

const string = 'Hallo Basti';
console.log(string.toUpperCase());

String.prototype.doIt = function () {
  return 'just do it';
};

console.log(string.doIt());
console.log(dog.name.doIt());

delete String.prototype.toUpperCase;
// console.log(string.toUpperCase());
