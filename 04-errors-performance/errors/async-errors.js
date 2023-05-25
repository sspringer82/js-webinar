import { readFile } from 'node:fs';
import { readFile as readFilePromise } from 'node:fs/promises';

const fileName = 'doesNotExist.txt';

readFile(fileName, 'utf-8', (error, data) => {
  if (error !== null) {
    throw new Error('whoops');
  }
  console.log(data);
});

readFilePromise(fileName, 'utf-8')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

try {
  const data = await readFilePromise(fileName, 'utf-8');
  console.log(data);
} catch (error) {
  console.log(error);
}
