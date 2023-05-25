import cluster from 'node:cluster';
import { createServer } from 'node:http';
import { cpus } from 'node:os';
import process from 'node:process';

if (cluster.isPrimary) {
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }
} else {
  function sleep(durationMs) {
    const start = Date.now();
    while (true) {
      if (Date.now() - start >= durationMs) {
        break;
      }
    }
  }

  const server = createServer((request, response) => {
    console.log(`incoming request on ${process.pid}`);
    sleep(2000);
    response.end('Hello World');
    console.log(`outgoing response on ${process.pid}`);
  });

  server.listen(8080, () =>
    console.log('Server is listening to http://localhost:8080')
  );
}
