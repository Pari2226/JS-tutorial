// for of 
["","",""]
[{},{},{}]

const arr = [1,2,3,4,5] // object
for(const num of arr){ // num is iterator
  console.log(num);
  
}

const greetings = "Hello World!"
for(const greet of greetings){
  console.log(`each char is ${greet}`);
  
}

// Maps : key-value pairs unique identification
const map = new Map()
map.set("IN", "India")
map.set("USA", "United state of America")

// console.log(map);

// for of loop
for(const [key, value] of map){
  console.log(key, ':-', value);
  
}
const myObject = {
  'game1': 'NFS',
  'game2': 'Spider'
}

for(const [key, value] of myObject){
  console.log(key,':-', value);
} 