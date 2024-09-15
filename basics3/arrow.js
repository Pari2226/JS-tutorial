const user = {
  username: "hello world",
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this); // print context 
    
  }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//   let username = "hitesh"
//   console.log(this.username);
  
// }
// chai()

// const chai = ()=>  {
//   let username = "hee"
//   console.log(this);
// }
// chai()

// arrow function 
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => {username: "he"}; // for returning objects
const addTwo = (num1, num2) =>{
  return num1 + num2;
}
console.log(addTwo(2, 2));

const myArray = [2,4,6,7,9]
myArray.forEach(() =>{}) 
