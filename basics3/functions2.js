function calculateCartPrice(val1, val2, ...num1){ //rest operator ...
  return num1
}

console.log(calculateCartPrice(200,400,500,2000));

const user ={
  username: "hitesh",
  price: 199
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
// handleObject(user)
handleObject(
  {
    username : "sam",
    price: 399
  }
)
const myNewArray = [200,400,100,600]
function returnSecondvalue(getArray){
  return getArray[1]
}
console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue);

