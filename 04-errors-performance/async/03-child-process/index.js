import { fork } from 'node:child_process';
import { createServer } from 'node:http';

let count = 0;

const server = createServer(async (request, response) => {
  const controller = new AbortController();
  const id = count++;
  console.log('incoming request', new Date(), id);
  const child = fork('./child.js', { signal: controller.signal });
  child.send('');
  child.on('error', () => {});
  child.on('message', (event) => {
    if (event.type === 'value') {
      response.end();
      console.log('outgoing response', new Date(), id);
    } else {
      console.log(`calculation took ${event.value} ms`);
      controller.abort();
    }
  });
});

server.listen(8080, () =>
  console.log('Server is listening to http://localhost:8080')
);
