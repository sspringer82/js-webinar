import { createReadStream, createWriteStream } from 'node:fs';
import { Transform } from 'node:stream';

const rs = createReadStream('input.txt');
const ws = createWriteStream('output.txt');

const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});
const toLowerCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toLowerCase());
    callback();
  },
});

rs.pipe(toUpperCase).pipe(toLowerCase).pipe(ws);

// Writable Stream
const ws = new Writable({
  write: (chunk, encoding, done) => {
    console.log('WRITE: ', chunk.toString());
    done();
  },
});

// Readable Stream
const readable = new Readable({
  objectMode: true,

  read() {
    this.emitValue();
  },
});
readable.items = 0;
readable.maxItems = 10;
readable.emitValue = () => {
  setTimeout(() => {
    if (readable.items++ < readable.maxItems) {
      readable.push(readable.createValue());
    } else {
      readable.push(null);
    }
  }, Math.floor(Math.random() * 5) * 1000);
};
readable.createValue = () => {
  return {
    date: new Date(),
    temp: `${Math.floor(Math.random() * 1000 - 273)}°C`,
  };
};
readable.on('readable', function () {
  let value;
  while (null !== (value = readable.read())) {
    console.log(JSON.stringify(value));
  }
});

class TemperatureReader extends Readable {
  constructor(opt = { objectMode: true }) {
    super(opt);
    this.items = 0;
    this.maxItems = 10;
  }
  _read() {
    this.emitValue();
  }

  emitValue() {
    setTimeout(() => {
      if (this.items++ < this.maxItems) {
        this.push(this.createValue());
      } else {
        this.push(null);
      }
    }, Math.floor(Math.random() * 5) * 1000);
  }
  createValue() {
    return {
      date: new Date(),
      temp: `${Math.floor(Math.random() * 1000 - 273)}°C`,
    };
  }
}

const tr = new TemperatureReader();
tr.on('readable', function () {
  let value;
  while (null !== (value = tr.read())) {
    console.log(JSON.stringify(value));
  }
});
