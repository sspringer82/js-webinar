import { EventEmitter } from 'node:events';

class MessageBus extends EventEmitter {}

const mb = new MessageBus();

mb.on('message', (data) => {
  console.log(`Message event was triggered: ${data}`);
});
mb.on('message', (data) => {
  console.log(`Message event was triggered #2: ${data}`);
});

mb.emit('message', 1);
mb.emit('message', 2);
mb.emit('message', 3);
mb.emit('message', 4);
