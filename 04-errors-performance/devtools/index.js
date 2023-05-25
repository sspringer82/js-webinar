import User from './user.js';

const user = new User('Klaus', 'Müller');

const sayHello = document.querySelector('#sayHello');
sayHello.innerText = user.greet('Hello');
