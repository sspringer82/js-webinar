import Car, { defaultName, carTypes as myCarTypes } from './car.js';

const myCar = new Car(myCarTypes[0], defaultName);

console.log(myCar);
