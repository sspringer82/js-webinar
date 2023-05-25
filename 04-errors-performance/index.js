import { createServer } from 'node:http';

class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

fetch('https://www.google.de')
  .then((response) => response.json())
  .then((data) => console.log(data));

const klaus = new User('klaus', 'Müller');
const laura = new User('Laura', 'Müller');

for (let i = 0; i < 10; i++) {
  console.log(i);
}

createServer((request, response) => {
  response.end('Hallo Welt!!!');
}).listen(8081, () => console.log('es läuft!'));
