const arr: Array<number> = [1, 2, 3];

type Person = {
  id: number;
  name: string;
};

async function fetchPerson(id: number): Promise<Person> {
  const response = await fetch('http://localhost:8080');
  const data = await response.json();
  return data;
}

// const paula = fetchPerson(4);

function log<T>(input: T): T {
  let cache: T = input;
  console.log(cache);
  return input;
}

const result = log<number>(42);
const result2 = log<string>('true');

class Collection<T> {
  private items: T[];

  constructor(initialValues: T[] = []) {
    this.items = initialValues;
  }

  // fluent interface
  addItem(item: T): Collection<T> {
    this.items.push(item);
    return this;
  }

  getItem(index: number): T {
    return this.items[index];
  }
}

const numColl = new Collection<number>([1, 2, 3]);
numColl.addItem(4).addItem(5).addItem(6);

interface WithId {
  id: number;
}

class IdCollection<T extends WithId> {
  private items: T[] = [];

  getById(id: number) {
    return this.items.find((i) => i.id === id);
  }
}
