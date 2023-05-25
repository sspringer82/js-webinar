const decoder = new TextDecoder();
export const encoder = new TextEncoder();

export function decodePayload(payload) {
  const ab = new Uint8Array(Uint8Array.BYTES_PER_ELEMENT * 1000);
  ab.set(payload, 0);
  let data = decoder.decode(ab);
  const result = data.substring(0, data.indexOf('\0'));
  return JSON.parse(result);
}

export function clear(wd) {
  for (let i = 0; i < wd.length; i++) {
    if (wd[i] === 0) {
      break;
    }
    wd[i] = 0;
  }
}