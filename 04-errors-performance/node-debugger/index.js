import User from './user.js';

const user = new User('Klaus', 'Müller');

for (let i = 0; i < 10; i++) {
  user.firstname += i + '-';
}

console.log(user.greet('Hallo'));
