// singleton object
// const tinderUser = new Object();
// console.log(tinderUser); // empty object print 

const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "sunny";
tinderUser.isLoggedIn = "false"
// console.log(tinderUser);


const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hello",
      lastname: "world"
    }
  }
}
//console.log(regularUser.fullname.userfullname); //accessing objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// accessing objects
//const obj3 = Object.assign({},obj1 , obj2) // {} will give modified result for sure
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const user =[
  {
    id: 101,
    email: "h@gmail.com",
  },
  {
    id: 102,
  },
  {

  },
]

user[1].email // accessing first value
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //accessing only keys of tinderUser
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // first is key & 2nd is value
console.log(tinderUser.hasOwnProperty('isLogged')); //boolean to verify the  existence 

