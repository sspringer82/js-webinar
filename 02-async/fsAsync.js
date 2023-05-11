import { readFileSync, readFile } from 'node:fs';
import { readFile as readFilePromise } from 'node:fs/promises';

console.log('a');
const data = readFileSync('./input.txt', 'utf-8');
console.log(data);
console.log('b');

console.log('c');
readFile('./input.txt', 'utf-8', (err, data) => {
  console.log('async file: ', data);
});
console.log('d');

console.log('e');
const fsProm = readFilePromise('./input.txt', 'utf-8');
fsProm.then((data) => console.log('Promise: ', data));
console.log('f');

console.log('g');
const fsPromdata = await readFilePromise('./input.txt', 'utf-8');
console.log('Async/await', fsPromdata);
console.log('h');
