// * Primitive 

// 7 types: String , Number, Boolean, NULL, undefined , symbol, BigInt
const scoreValue = 100.3

const outsideTemp = null
let userEmail;
const id = Symbol('123')
const idd = Symbol('123')
console.log(id === idd)


// const bigNumber = 16527534501324n // BIG INT
// Reference (Non primitive)

// Array, Objects, Functions

const hero = ["shakiman", "naagraj", "doga"]
let myObj={
    name: "bella",
    age: 22,
}

const Functions = function(){
    console.log("hello world")
}

console.log(typeof bigNumber);
console.log(typeof Functions);

// ******Stack(Primitive) and heap memory(non-primitive)
let myYtname = "You are Beautiful";
let anName = myYtname
anName = "You ate."

console.log(myYtname);
console.log(anName);

let user1 ={
    email: "user@gmail.com",
    upi: "user@ybl"
}
let user2 = user1

user2.email = "Hellooo@gmail.com";
console.log(user1.email);
console.log(user2.email);

