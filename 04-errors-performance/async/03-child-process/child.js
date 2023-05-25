import { PerformanceObserver, performance } from 'node:perf_hooks';

const obs = new PerformanceObserver((items) => {
  process.send({ type: 'measure', value: items.getEntries()[0].duration });
  performance.clearMarks();
});
obs.observe({ type: 'measure' });

function sleep(durationMs) {
  const start = Date.now();
  while (true) {
    if (Date.now() - start >= durationMs) {
      break;
    }
  }
}

process.on('message', () => {
  performance.mark('start');
  sleep(2000);
  process.send({
    type: 'value',
    value: 'Hello World',
  });
  performance.measure('start to end', 'start');
});
