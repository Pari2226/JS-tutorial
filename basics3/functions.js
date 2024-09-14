// function definition
function name(){
  console.log("H");
  console.log("I");
  console.log("E");
  console.log("S");
  console.log("H");
}
// function reference
//name()

// function addTwo(number1, number2){ // parameters
//    console.log(number1 + number2);
   
// }

function addTwo(number1, number2){ // parameters
  // let result = number1 + number2; 
  // return result 
  return number1 + number2; // returns variable
  
}
const result = addTwo(3,5) // arguments
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
  if(username=== undefined)
    //if(!username)
  {
      console.log("Please enter a username");
      return;
  }
  return `${username} just logged in`
}
console.log(loginUserMessage("Vs code"))
console.log(loginUserMessage())
console.log(loginUserMessage(""))  //undefined