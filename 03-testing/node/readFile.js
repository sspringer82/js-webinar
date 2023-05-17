import { readFile } from 'node:fs/promises';

export async function readFromFile() {
  const content = await readFile('input.txt', 'utf-8');

  return content
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}
