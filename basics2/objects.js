// singleton: only by constructor

// object literals(this is object literals)

const mySym = Symbol("key1")

const JsUser = {
  name: "Hello JS",
  "full name": "Hello Bello",//keys-values
  [mySym]: "mykey1", // for symbol key use [...]
  age: 18,
  location: "Jaipur",
  email: "@gmail.com",
  lastLoginDays: ["Monday", "Saturday"]
}

// accessing objects

console.log(JsUser.email);

console.log(JsUser["name"]);

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// change values
JsUser.email = "hello@gmail.com";
//Object.freeze(JsUser);
JsUser.email = "hello222@gmail.com";
//console.log(JsUser);


// adding function as variables 
JsUser.greeting = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());