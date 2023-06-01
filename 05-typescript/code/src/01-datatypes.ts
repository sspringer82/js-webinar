const s1: string = 'String 1'; // keine typzuweisung bei const
var s2: string = 'String 2'; // kein var nutzen!
let s3: string = 'String 3';

const s4 = 'String 4'; // literal type "String 4"

// string
const s5 = `Template`;
const s6 = "double 'quoted' string";
const s7 = 'single quoted string';

// number
let n1: number = 42;
let n2 = 43; // setzt den typ automatisch auf number
// n2 = true; // type boolean is not assignable to type number

// boolean
let b1: boolean = true;

// symbol
let sym1: symbol = Symbol('foo');

// bigint
let bi1: bigint = 42n;

// ATTENTION: TYPESCRIPT AHEAD

// tuple
const tuple: [number, string, boolean] = [42, 'Hallo', true];

// union type
let union: number | string = 42;
union = 'Hallo';

// unknown
function unknownFn(input: unknown) {
  // input.foo();
  // input[0];
  // input();
  // new input();
  // const o: object = input;
}

// any
let myAny: any = 42;
myAny = 'zweiundvierzig';

// void
function myVoid(): void {}

// array
const arr: Array<number> = [1, 2, 3]; // generic schreibweise
const arr2: number[] = [1, 2, 3]; // standard array schreibweise

// object
const o: { id: number; title: string } = { id: 1, title: 'Pizza' };
