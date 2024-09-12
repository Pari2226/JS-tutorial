const name = "hello"
const repoCount = 50;

//console.log(name + repoCount+ " Value");
// placeholders in backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('Bella')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
// substring string starts from 0
const newString = gameName.substring(0,4)
console.log(newString);
// slice
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   jnejfn  "
console.log(newStringOne);
console.log(newStringOne.trim()); // unwanted white spaces 

const url= "https:hcjdsnmkj"
console.log(url.replace(url.replace('%20', '-')))

console.log(url.includes('Money'));
console.log(gameName.split('-'));
