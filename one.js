// if
// const isUserloggedIn = true;
// const temperature = 25;
// if(temperature<50){
//   console.log("less than 50");
// }
// else{
//     console.log("temperature is not good.");
//   }

// console.log("temperature is greater than 50");

// const score = 200
// if(score>100){
//   const power = "fly"
//   console.log(`User power: ${power}`);
  
// }
// console.log(`user power: ${power}`); // 


// if(3!=2){
//   console.log("executed");
  
// }
// if(2 != 3){
//   console.log("equal");
// }
// if(false){}


// short hand notation
// const balance = 1000
// if(balance > 500) console.log("test"),
// console.log("test2");

// if(balance < 500){
//   console.log("less than 500");
  
// }else if(balance < 750){
//   console.log("less than 750");
// }
// else{
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInViaEmail = true;

if(userLoggedIn && debitCard && 2==2){
  console.log("Allow to buy course");
  
}
if(loggedInFromGoogle || loggedInViaEmail) {
  console.log("User logged in");
  
}

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// console.log(val1);
val1 = null ?? 10 ?? 30
console.log(val1);


// Ternary operator
// condition ? true : false;

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80"): console.log("more than 80")