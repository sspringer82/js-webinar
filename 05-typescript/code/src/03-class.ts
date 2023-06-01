export class Person {
  private age = 0;
  constructor(
    private firstname: string,
    private lastname: string,
    age: number
  ) {
    this.age = age;
  }

  get fullname(): string {
    return `${this.firstname} ${this.lastname} (${this.age})`;
  }
}

function greet(person: Person): void {
  console.log(`Hello ${person.fullname}`);
}

const klaus = new Person('Klaus', 'Müller', 42);
greet(klaus);

class User extends Person {
  constructor(
    firstname: string,
    lastname: string,
    age: number,
    private readonly password: string
  ) {
    super(firstname, lastname, age);
  }

  getHashedPassword(): string {
    return 'asdfafuzalsdkfj';
  }

  static createUser(firstname: string, lastname: string) {
    return new this(firstname, lastname, 42, 'secret');
  }
}

const user = new User('a', 'b', 42, 'secret');
console.log(user.fullname);

greet(user); // geht weil user automatisch vom Typ Person ist
