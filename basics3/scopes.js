// let a = 10
// const b = 20
// var c = 30
// {   } is scope
let a = 300
if(true){
  let a = 10
  c = 30
  console.log("INNER: ", a);
}
//console.log(a);
//console.log(b);
// console.log(c);

function one() {
  const username = "vs code";

  function two() {
    const website = "youtube"
    console.log(username);
    
  }
 // console.log(website); // nested func not allows inner func to execute outside
  
  two() // execute two function
}
//one() //execute one function


if(true) {
  const username = "hii"
  if(username === "hii") {
    const website = " youtube"
    console.log(username + website);
    
  }
  // console.log(website);
}
//console.log(username);

//  *************** interesting ***************

console.log(addOne(5))

function addOne (num){  // here we only declared func 
  return num + 1
}


addTwo(5)
const addTwo = function(num){ // here we given a value to function using var
  return num + 2
}