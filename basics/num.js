const score = 400;
console.log(score);

const balance = new Number(100) // specially define number datatype
console.log(balance);

console.log(balance.toString().length); // into string conversion length
console.log(balance.toFixed(2));        // calculation value for precision value ater integer

const otherNumber = 123.23243
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); 

// ************MATH************

// console.log(Math);
// console.log(Math.abs(4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.sqrt(4));
// console.log(Math.floor(4.8));
// console.log(Math.min(3,5,6,7,8));
console.log(Math.random()); // 0-1 values
console.log(Math.floor(Math.random()*10) + 1); // 1< floor


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min ))


