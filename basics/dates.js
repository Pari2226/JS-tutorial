// date is an object in Javascript
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24)
let myCreatedDate = new Date("04-24-2004")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now() // for polls and quizs
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // in milliseconds
//console.log(Math.floor(Date.now()/1000)); // in seconds 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})