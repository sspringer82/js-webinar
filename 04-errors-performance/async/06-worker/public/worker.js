import { encoder, decodePayload, clear } from './util.js';


onmessage = function (workerData) {
  const {
    operands: [operand1, operand2],
  } = decodePayload(workerData.data);

  const result = operand1 + operand2;

  clear(workerData.data);

  const encoded = encoder.encode(
    JSON.stringify({ operands: [operand1, operand2], result })
  );

  workerData.data.set(encoded, 0);
  postMessage('ready');
};
