import { EventEmitter } from 'node:events';
import { fromEvent, map } from 'rxjs';

class MessageBus extends EventEmitter {}

const mb = new MessageBus();

const source = fromEvent(mb, 'message');

source
  .pipe(map((input) => input.toUpperCase()))
  .subscribe((output) => console.log(output));

mb.emit('message', 'Hello World');
