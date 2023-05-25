import { createServer } from 'node:http';

function sleep(durationMs) {
  const start = Date.now();
  while (true) {
    if (Date.now() - start >= durationMs) {
      break;
    }
  }
}

const server = createServer((request, response) => {
  console.log('incoming request');
  sleep(2000);
  response.end('Hello Node');
  console.log('outgoing response');
});

server.listen(8080, () =>
  console.log('Server is listening to http://localhost:8080')
);

// time curl localhost:8080 & time curl localhost:8080
