type User = {
  id: number;
  name: string;
};

type CreateUser = Omit<User, 'id'> & { id?: number };

function getUser(id: number): User {
  // magic happens here
  return { id: 1, name: 'asdf' };
}

function createUser(newUser: CreateUser): User {
  // magic happens here
  return { ...newUser, id: Math.floor(Math.random() * 1000) };
}

const klaus = {
  name: 'Klaus',
};

const createdKlaus = createUser(klaus);
console.log(createdKlaus);

function foo() {
  return 'bar';
}

let result: ReturnType<typeof foo>;

type Keys = 'x' | 'y';

let o: Record<Keys, number> = {
  x: 2,
  y: 4,
};
