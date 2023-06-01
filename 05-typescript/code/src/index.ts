import { Person } from './03-class.js';
import User from './user.js';

let firstname: string;
firstname = 'Klaus';

console.log(`Hello ${firstname}`);

const klaus = new User();
console.log(klaus.greet());

const lisa = new Person('Lisa', 'Schmitt', 27);
console.log(lisa.fullname);
