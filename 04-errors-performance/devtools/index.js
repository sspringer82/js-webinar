import User from './user.js';

const user = new User('Klaus', 'Müller');

for (let i = 0; i < 10; i++) {
  debugger;
  console.log(i);
}

const sayHello = document.querySelector('#sayHello');
sayHello.innerText = user.greet('Hello');
