import { createServer } from 'node:http';

function sleep(durationMs) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    while (true) {
      if (Date.now() - start >= durationMs) {
        break;
      }
    }
    resolve();
  });
}

const server = createServer(async (request, response) => {
  console.log('incoming request');
  await sleep(2000);
  response.end('Hello Node');
  console.log('outgoing response');
});

server.listen(8080, () =>
  console.log('Server is listening to http://localhost:8080')
);

// time curl localhost:8080 & time curl localhost:8080
