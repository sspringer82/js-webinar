import { Worker, isMainThread, parentPort } from 'node:worker_threads';
import { createServer } from 'node:http';

if (isMainThread) {
  const server = createServer((request, response) => {
    const worker = new Worker('./index.js');

    worker.on('message', (data) => {
      response.end(data.toString());
      worker.terminate();
    });
  });

  server.listen(8080, () =>
    console.log('server is listening to http://localhost:8080')
  );
} else {
  function sleep(durationMs) {
    const start = Date.now();
    while (true) {
      if (Date.now() - start >= durationMs) {
        break;
      }
    }
  }

  sleep(2000);

  parentPort.postMessage('hello world');
}
